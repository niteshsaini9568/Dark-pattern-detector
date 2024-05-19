const express = require('express');
const app = express();
const path = require("path");
const mongoose = require('mongoose');
let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/Feedback');
}

main()
    .then(() => { console.log("Connected Succesfully"); })
    .catch((err) => { console.error(err); });

const userSchema = new mongoose.Schema({
    names: String,
    emails: String,
    contacts: Number,
    ratings: Number,
    experiences: String,
    highlightings: String,
    summarizers: String,
    adBlockers: String,
    reportings: String,
    textarea: String,
});

const feed = new mongoose.model("feed", userSchema);

app.get("/rating", (req, res) => {
    res.render("rating.ejs");
});

app.get("/rating/thanks", (req, res) => {
    res.render("thanks.ejs");
});

app.get('/terms', (req, res) => {
    const { terms } = req.query;
    const url = `https://google-search74.p.rapidapi.com/?query=${terms}&limit=10&related_keywords=true`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'fa72dc1f26msh5e304cb6e71545ep19e194jsn1e640d220fe6',
            'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
        }
    };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data.knowledge_panel?.description?.url);
                T_and_C_Url = data.knowledge_panel?.description?.url;
            // Web-Scrapping the  Terms and Condition Page for its content
            const url = `https://website-to-text-converter.p.rapidapi.com/convert?url=${T_and_C_Url}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'fa72dc1f26msh5e304cb6e71545ep19e194jsn1e640d220fe6',
                    'X-RapidAPI-Host': 'website-to-text-converter.p.rapidapi.com'
                }
            };
            fetch(url, options)
                .then(res => res.json())
                .then(result => {
                    let web_content = result.data.text.replace(/\n/g, '.').replace(/\s{2,}/g, ' ').replaceAll('"', "'");
                    // Making the Web-Scrapping Content to Summary
                    const apiUrl = `https://api.textgears.com/summarize?key=Wam0Sk1yJkMWADMP&language=en-GB&text=${web_content}`;

                    fetch(apiUrl)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.json();
                        })
                        .then(data => {
                            // Process the fetched data here
                            const summary = data.response.summary[0];
                            const highlight = data.response.highlight[0];
                            console.log(summary);
                            console.log(highlight);
                            // Render the terms.ejs file with the data
                            res.render('terms', { summary: summary, highlight: highlight });
                        })
                        .catch(error => {
                            console.error('There was a problem with the fetch operation:', error);
                        });
                })
                .catch(err => console.error(err));
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation2:', error);
        });
});

app.post("/rating", (req, res) => {
    let { name, email, contact, rating, experience, highlighting, summarizer, adBlocker, reporting, textarea } = req.body;
    console.log(req.body);
    let newUser = new feed({
        names: name,
        emails: email,
        contacts: contact,
        ratings: rating,
        experiences: experience,
        highlightings: highlighting,
        summarizers: summarizer,
        adBlockers: adBlocker,
        reportings: reporting,
        textarea: textarea,
    });
    newUser.save().then((response) => {
        console.log(response);
    }).catch((err) => {
        console.log(err);
    })
    res.redirect("/rating/thanks");
});

app.get('/data-breach', (req, res) => {
    res.render('data-breach');
});

app.post('/data-breach', (req, res) => {
    const email = req.body.email;
    const url = `https://data-breach-checker.p.rapidapi.com/api/breach?email=${email}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9f90febbe8msh776fa18ace4825ep1c6da4jsna50a4df94380',
            'X-RapidAPI-Host': 'data-breach-checker.p.rapidapi.com'
        }
    };

    let response = async () => {
        try {
            await fetch(url, options).then(res => res.json()).then(result => {
                console.log(result);
                res.render('breach_display', { result });
            }).catch(err => console.error(err));

        } catch (error) {
            console.error(error);
        }
    }
    response();
});

app.get("/reporting", (req, res) => {
    res.render("reporting.ejs");
});

app.listen(port, () => {
    console.log("Server started on port " + port);
});
