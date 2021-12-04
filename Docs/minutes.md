# The Dissidents - Meeting Minutes

## Assignment 3

Friday, December 3, 2021 3:00pm ET
- Brief final check in before A3 submission
- Revised and proofread write-up
- Cleaned up repository, finished READMEs

Wednesday, December 1, 2021 7:00pm ET
- Check in for A3 progress
- A2 retro write-up complete
- Jonathan will complete token storage and tests for the product
- David to complete write-ups as well
- Will check in again on Friday before deadline
- Presentation preferences for Monday
- Working on slides and will prepare as a team early Monday
- Nancy to add meeting notes in repo

Thursday, November 18, 2021 12:20pm ET
- Last TA meeting of the year

Monday, November 22, 2021 9:00pm ET
- Discussed A3 writeup including A2 retrospective
- To do:
  - Connecting frontend and backend (David, Nancy)
  - Storage for adding and validating tokens (Jonathan)
  - Unit testing with mocha 
  - Retrospective (nancy)
  - Presentation slides and notes for 10 minutes
- Goal: Aim to get most coding tasks done by **Nov 29** (excluding auto-testing)

Thursday, November 18, 2021 12:20pm ET
- Brief check-in with TA
- Went over A3 requirements, realized that we will need automated unit tests for the final submission (this was a surprise but not a huge deal)
- Briefly discussed unit testing, decided to implement unit tests which verify the functionality of the main endpoints in the authentication app

Tuesday, November 9, 2021 7:00pm ET
- Group decision to skip the weekly meeting in favour of a check in on Discord, seeing as there are no immediate action items until we get feedback from A2 submission
- We will continue working on our assigned tasks individually until our weekly meeting next Tuesday


## Assignment 2

Thursday, November 4, 2021 12:20pm ET
- TA updates
  - No meeting next Thursday due to reading week
  - Another postmortem coming up
  - Next assignment released next Monday
  - Coding due December 3, after that presentations and 1:1 interviews
- Final A2 meeting
  - Discussed completion of milestones and collaborated on Assignment 2 document
  - Team agrees that milestone 2 was completed, while milestone 3 was only partially completed. We think this performance is acceptable given the limited scope of milestone 4, which we intentionally designed to require less effort in order to provide space for overflow from previous milestones ahead of project completion.

Tuesday, November 2, 2021 7:00pm ET
- Discussed progress on client site and server app
  - Client site done, but one challenge we’ve encountered is that the signin URL the client site directs the user to is environment-specific
  - Our client site is entirely static (just a simple HTML page), so we discussed and decided to leave the URL hard-coded to the value used in production (i.e. public URL of the deployed server), and just change the value locally when in development
  - Auth app is mostly complete, but Nancy wanted to consult the rest of the team on the type of auth token used and method of persistent storage
    - We had a brief discussion to consider the kind of token used. Using some combination of node’s builtin base64/hash functions plus a pseudo-random number and the server time could generate a useable token without introducing any new dependencies, but we decided that using a UUID library would be a much more robust way to generate a token
    - Initially, we planned to use a database or document store to store generated user tokens, so that they can be validated during subsequent requests. We discussed the process of generating a schema for a database and the introduction of another auth app dependency, and decided that the simplest MVP would be storing the generated tokens in a text file. We will re-evaluate this in the next milestone.
- Discussed integration of client site and server app
  - Once the remaining auth app routes are complete, we should be able to connect the two apps and have a functional system
- Discussed deployment
  - Public deployments have been created
    - Auth app: [oauth-server.lib.by](oauth-server.lib.by)
      - This deployment still requires some attention from Jonathan to finish setting up the node app
    - Client app: [oauth-client.lib.by](oauth-client.lib.by)

Thursday, October 28, 2021 12:20pm ET
- TA meeting
- Discussed how personal tasks are going so far, and if there are any roadblocks

Tuesday, October 26, 2021 7:00pm ET
- Discussed what subtasks we’ve completed so far
- Brainstormed ideas for how the sample frontend can validate the auth token in a robust manner
- The email to Greg containing the acceptance criteria storyboard should be sent by the end of the day

Thursday, October 21, 2021 12:20pm ET
- TA meeting
- Prof suggests meeting with Greg every 2 weeks

Tuesday, October 19, 2021 7:00pm ET
- Followed up with professor about A1 feedback
- Discussed shape of requests between frontend and backend, sending username password and redirect URL
- Lecture yesterday, talking to Greg about acceptance criteria for our OAuth application
  - Need to present a successful case for our application, and a failure case
  - E.g. someone signing in successfully, or getting password wrong and not being able to sign in
  - Send flowchart to Greg, like a movie storyboard
  - [CSC302 OAuth Service Acceptance Criteria Storyboard](https://docs.google.com/drawings/d/15oW20nCNt3_l6jOFAW5Ji9htRdRud2nnq5nddlI60WQ/edit)
  - gvwilson@third-bit.com 
- Starting on our subtasks this week, ~2 weeks until deadline of Nov 4
- **Nov 2** - try to get our subtasks done to combine for the assignment deadline

Thursday, October 14, 2021 12:20pm ET
- Asked about A1 feedback
- TA mentioned that we need to meet with Greg before we submit A2

Wednesday, October 13, 2021 6:00pm ET
- A1 results, A2 posted
- Discussed next step responsibilities for A2 and next development milestone
- Discussion of A1 results
  - We all agreed that the mark is satisfactory, we’re happy with what we produced for A1
  - We’re wondering what we were missing from A1, not obvious to us what we were missing so we’ll need some feedback from our TA
- Need to write email to Greg
- Questions for TA
  - Feedback for A1: what were we missing?


Thursday, October 7, 2021 12:20pm ET
- Meeting with TA
- A2 not published yet, but recommended to start now on next steps (1-2 features to implement)


## Assignment 1

Tuesday, October 5 7:00pm ET
- Group decision to skip the weekly meeting in favour of a check in on Discord, seeing as there are no immediate action items until we get feedback from the A1 submission
- Agreed to delegate specific roles to proceed with development of our prototype once the plan from A1 has been approved and scope questions clarified in weekly TA meeting on Thursday

Monday, October 4 4:00pm ET
- Initialized project repo https://github.com/zhaonancy/csc302-oauth
- Completing A1
    - Decisions for design section

Thursday, September 30, 2021 12:20pm ET
- First meeting with our TA, Alexandra Tsvetkova
- Talked about our backgrounds, where we are at so far, and any problems we’ve encountered so far
- Discussed the possibility of setting up a meeting with Greg Wilson to clarify the scope of our project

Tuesday, September 28, 2021 7:30pm ET
- Filled out office hours form
- Worked on A1 for Javascript OAuth project
    - Features we plan to implement
    - Timeline
    - Design requirements and options
- Questions
    - How much writing is expected from us for the Javascript project?
    - OAuth not vulnerable to MITM attacks, our code has to do the same?
    - Does auth server have to be written in JS? (can backend be a Python script?)

Wednesday, September 22, 2021 7pm ET
- Intro, experiences
- Weekly meeting: Tuesdays at 7pm ET
- Github accounts
