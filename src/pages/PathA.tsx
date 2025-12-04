You are a senior product designer and React/TypeScript + Tailwind developer inside Lovable.

Goal:
Design and build the **Path A: Fast Help** page for Nimara. This page appears when someone clicks “Start Path A”. It should:
- Confirm they’re in the right place
- Let them self-check if Path A is right for their situation
- Show exactly what happens and what they get
- End with one small, clear action (short intake or book a call)
No heavy reading, no jargon, one primary CTA.

Brand / style:
- Clean, modern, fintech-like (Nimara / Chipper-style)
- Sans-serif font (Inter / system UI), lots of white space, big rounded cards, mint primary CTAs
- Strong contrast (dark text on light backgrounds)
- Mobile-first, responsive

Build a single page component with **exactly 5 sections**, in this order:

1) HERO – “Fast help for one urgent problem”
------------------------------------------------
Purpose: Hook, set expectations, push to intake.

Content:
- Tag pill: “Path A”
- Heading: “Path A: Fast Help”
- Subheading: “Fix one urgent problem so you can breathe again.”
- Short paragraph:
  “Path A is for moments when something can’t wait. An audit, a grant, a policy gap, a scary email from a funder. We come in, fix one clear problem, and leave you with a small set of tools you can actually use.”
- 3 small stat chips:
  - “Timeline: 1–4 weeks”
  - “Focus: One urgent problem (Audit, Grant, Policy, Finance, HR)”
  - “Deliverable: Mini Acceptance Bundle (done-with-you, not a PDF dump)”
- Primary CTA button (mint, large):
  - Label: “Start Path A – 7-minute intake”
  - On click: scrolls to the intake section (#start-path-a).
- Secondary link (small, under button):
  - Text: “Not sure if this is right? See other options.”
  - For now, link to “#” or placeholder.

2) SECTION – “Is Path A right for you?” (self-check)
------------------------------------------------
Purpose: Quick fit check in plain language.

Content:
- Heading: “Is Path A a good fit?”
- Subheading: “Use this when you need relief, not a big project.”
- Intro line: “Path A is a match if at least one of these sounds like you:”
- Bullets:
  - “We have a funder, auditor, or regulator asking for something we don’t have ready.”
  - “We’re about to submit a grant and our systems feel shaky.”
  - “We got a scary email and don’t know where to start.”
  - “We know the exact problem. We just don’t have the time or in-house skills to fix it.”
  - “We don’t want a 6–12 month project. We just need one important thing fixed, properly.”
- Small “Not for you” card at the bottom:
  - Title: “Path A is not a match if:”
  - Bullets:
    - “You want to redesign your whole organization at once.”
    - “You don’t know what the problem is yet.”
    - “No one on your team can give 1–2 hours over the next few weeks.”
  - Small line: “In those cases, Path B (system build) or a quick Health Check is better.”

3) SECTION – “How Path A works” (simple + timeline & commitment)
------------------------------------------------
Purpose: Show the flow and effort in one place.

Content:
- Heading: “How Path A works”
- Subheading: “Simple, clear, and light on your time.”
- Use a 4-step timeline or vertical stepper:

Step 1 – “Quick intake (today)”
- “You complete a short 7-minute form and tell us what’s on fire. We review it within 1 business day and confirm if Path A is a good fit.”

Step 2 – “Matching & plan (within 72 hours)”
- “We match you with a Nimara consultant who has done this before. Together, you agree on:
   • The exact problem to solve
   • What ‘done’ looks like
   • What we can deliver in 1–4 weeks”

Step 3 – “Fast work + check-ins (1–4 weeks)”
- “We do the heavy lifting. You stay in the loop with short check-ins. We keep your time to about 1 hour per week.”

Step 4 – “Mini Acceptance Bundle (at the end)”
- “You leave with:
   • The thing you needed (policy, package, plan, or fix)
   • Simple instructions so your team can keep using it
   • A short note you can share with funders or your board”

- Under the steps, add a small “Timeline & your commitment” strip:
  - “We respond to your intake within 1 business day, propose a plan within 72 hours, and aim to complete the work in 1–4 weeks. Your role: name one contact person, join 1 short scoping call and 1–2 check-ins, and share any documents we need.”

4) SECTION – “What you get: Mini Acceptance Bundle”
------------------------------------------------
Purpose: Make the output concrete.

Content:
- Heading: “What’s inside the Mini Acceptance Bundle?”
- Subheading: “A small, useful set of tools you can use the next day.”
- Use 3 or 4 cards/tiles:

Card 1 – “The main fix”
- “The thing you came for: a policy, process, package, or response that meets the standard and you can actually use.”

Card 2 – “A simple how-to”
- “A 1–2 page guide in plain language that shows your team how to use the new tool without you needing Nimara every time.”

Card 3 – “A short record for funders / board”
- “A short summary you can attach to reports or minutes:
   • What was fixed
   • When
   • How it reduces risk”

Optional card – “Light follow-up support”
- “For some Path A projects, you can add 2–3 quick check-ins over the next 3 months. We’ll tell you if that makes sense for your case.”

5) SECTION – “Start Path A” (intake + micro FAQ + what we ask)
------------------------------------------------
Purpose: Final push to action with just enough reassurance.

Content:
- Section ID: `id="start-path-a"` so hero button can scroll here.
- Heading: “Ready to start Path A?”
- Short text:
  - “If you’re facing one clear problem and need real help, start here. A Nimara team member will review your intake and reply within 1 business day.”

- Two-column layout on desktop (stack on mobile):
  - Left: “What we’ll ask in the intake”
    - Subheading: “No long forms. Just the basics we need to help.”
    - Bullets:
      - “What is the one urgent problem?”
      - “Who is asking for it? (A funder, an auditor, a regulator, your board.)”
      - “What is the deadline or time pressure?”
      - “Roughly how many staff do you have?”
      - “Have you tried anything already?”
    - Small reassurance line:
      - “We won’t ask for detailed financials or private data in this first step.”

  - Right: CTA + micro FAQ
    - Primary button (mint, full width on mobile):
      - Label: “Start Path A – 7-minute intake”
      - For now, link to a placeholder intake URL.
    - Small text + secondary link under the button:
      - “Prefer to talk first? Book a short call instead.”
    - 3–4 line micro FAQ (inline list, not huge):
      - “What if we don’t know exactly what the problem is?”  
        → “Start a short call instead. We’ll help you name the problem first.”
      - “What if our deadline is tomorrow?”  
        → “If it’s truly last-minute, we’ll be honest if we can’t help in time.”
      - “Can Path A turn into a bigger project?”  
        → “Sometimes. Only if it makes sense for your team and capacity.”
      - “Is there a cost?”  
        → “We’ll be clear about costs and any funding options before you decide.”

Implementation:
- One React component for the Path A page.
- Use semantic HTML sections, Tailwind for styling, and keep the layout clean and calm.
- Only one primary CTA: “Start Path A – 7-minute intake”, repeated in hero and final section.
