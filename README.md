# Capstone-Group-GJ
--------------This is One-Page-Pitch--------------
**Why we choose this idea**
Hong Kong is a business capital in Asia. According to that we believe a lot of people try to make a company or try to run own business in Hong Kong.

But not everyone has enough money to run own business in the beginning, and we think in Hong Kong a lot of people want to become a "Angle Investor" or just want to do investment to make more money.

Our website is providing "Forum System" to match people who want to find investors or Entrepreneurs. Our Target is the person who has skills or idea, want to run a business and want to get a investement or find a business partner to run the company together, then they can post their description to understand what they can do, what they want for their business. So Investors can see the post from our website and then if they have interest in one of them, and they would like to contact with them, we can provide a chatting system to talk to the person who they like.

**UI UX**
For User Interface(UI), We want to provide a simple and smart look. We believe first impression of the website is the key to get more users in the future.
For User Experience(UX) We want to make any user feel easy to understand how to use our website.

**How we make money**
We want to provide our service as free in the beginning, If any user want to donate to develope our website we only take donation. Once the amount of users increase, we want to make it Subscribe system to make money, or get commision when they're matched.


<!-- * Upload some powerpoint or something to convince the investors -->

-------------------This is Spec-------------------
**Core functions sorted by importance level**
* Landing Page
* Log in page
* Sign up page
* Get started Page
* Profile of Investors
* Post Content + Profile of the users //company <---it contains in post
* Upload Picture AWS S3
* Investors can search users
* Entrepreneurs can search Investors
* filter by category
* filter by region
* Use Bcript and extra library for ID for users security.
* Setting Post/Profile Page
* Categories ['Properties', 'Finance', 'FinTech', 'Food', 'Others']
* Help Page / Support / Contact Us (Users leave comment or technical issues to tell us)
* Chatroom indivisualy
* Question Page
* New post comes up
* Blog SEO articles

**Not Important**
* Third Party Payment method Donation for future. Stripe API
* Cash flow calculator
* Other Languages pages (Not Important)
* API for chart of industry growth (I like it)
* Timelimit for the post
* Advertisement in our website for making money and donations
* We'll put all of the stuff to Domain remote server, so We don't use local envirment for this project.
-----------------This is WireFrame----------------
**WireFrame is in WireFrame folder**

--------------This is Database Design-------------
* Table of User //We can add a column of 'Investors' boolean
* Table of Investors
* Table of Category


-------------This is a Note for Jihyup------------
* Anyone can see the post, but if you're not logged in, the user can't do any action.
* Entrepreneurs needs to creat thier Profile when they're sign up so they can post.
* When a investor sign up, make them to choose what category they do like, they don't need to finish their profile(portfolio) to search or browse Entrepreneurs
* User's profile page has Overview, Details, Thier company information, Summury, Highlights, The button to chat to them. Also has a background picture they can upload anytime, left-bottom of background picture has icon picture, righside of that has name and bottom of the name has location. Aloso their is a favourites button, if they click the button its like a like button, it goes to a user's favourites list.
* Investor's page has Also has a background picture they can upload anytime, left-bottom of background picture has icon picture, righside of that has name and bottom of the name has location. Aloso their is a favourites button, if they click the button its like a like button, it goes to a user's favourites list. And About himself(herself), Expertise, Criteria and rightside of all of these has Profile, it contains minimum maximum amount of investment, Registration Date etc.
* Now I think User's doesn't need to have a profile page. It's because User's can see the post without login which means you don't need to make a account unless you want to post your idea and share. It means users information has to be inside of the post.

* Use Modal to review the page