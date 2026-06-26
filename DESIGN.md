# Fast Forward >> Typing - Design System

Read this before producing any UI, copy, email, or branded surface.

## Visual Identity

### Colors

| Token | Hex | Usage |
|---|---|---|
| `indigo` | `#3f0ff2` | Primary buttons, correct characters, progress bars, headings |
| `peach` | `#f8a37c` | Error highlights, warmth accents |
| `electric-yellow` | `#edf656` | CTAs, celebrations, speed test button, badges |
| `lavender` | `#eeecfe` | Light mode background (easy on eyes for long sessions) |
| `white` | `#ffffff` | Typing area, cards, stat boxes |
| `dark` | `#0a0a0b` | Dark mode background |
| `dark-surface` | `#141416` | Dark mode cards, elevated surfaces |
| `dark-border` | `#27272a` | Dark mode borders, dividers |
| `dark-text` | `#050111` | Light mode body text |

Dark mode is the default. Light mode uses lavender bg with dark-text body.

### Typography

**Font:** Poppins (Google Fonts, free, supports Latin Extended - DE umlauts, FR accents)

| Element | Weight | Size guidance |
|---|---|---|
| Hero headline | ExtraBold (800) / Black (900) | text-5xl to text-7xl |
| Section headings | Bold (700) | text-2xl to text-3xl |
| Body text | Regular (400) / Medium (500) | text-base to text-lg |
| Navigation | Medium (500) / SemiBold (600) | text-sm |
| Buttons | SemiBold (600) | text-sm to text-base |
| Small/caption | Regular (400) | text-xs to text-sm |

### Design direction

**Aesthetic:** Linear + Superhuman hybrid. Dark, fast, minimal, professional.

- Clean layouts with generous whitespace
- Subtle borders, not heavy shadows
- Backdrop blur on overlays and headers
- Smooth transitions (150-200ms)
- No clutter, no decoration for decoration's sake

### Mascot: KeyCharacter

The KeyCharacter is the product mascot (flat 2D vector, Duolingo/Ratatype energy). It appears in different poses across the site: sitting, waving, sitting-waving, typing, celebrating. Used in lesson completion screens, course overview, footer, and onboarding flows.

## Target Persona

**Read the full persona doc** in business-ideas/fast-forward-typing/type/persona.md before writing any copy.

**Primary:** Adults 25-55 who type every day but never learned touch typing. Professionals, freelancers, career changers. They are NOT students, NOT kids, NOT speed junkies. They are productive people who know they could be faster.

**Key messaging rules (from persona):**
- Never say "learn to type" - say "type faster", "type smarter", "master touch typing"
- Never infantilize - no cartoon rewards, no "great job!" popups
- Lead with the outcome - "Imagine typing twice as fast" not "Welcome to our course"
- The typing test is the hook, the course is the product, the certificate is the proof
- Time-bound: "4 weeks, 15 min/day" not "lifetime access to 500 lessons"
- Data over hype: "Touch typists are 40-60% faster" not "Become a typing master!"

**Anti-personas (do NOT design for):**
- Speed junkies (80+ WPM, want 120+) - they use Monkeytype
- Schools/teachers - requires admin dashboards, COPPA, procurement (future opportunity)
- Young children under 10 - needs fully gamified, story-driven UX

## Tone of Voice

### Core principles (all languages)

1. **Always positive.** Celebrate progress. Never call someone out. Never make the user the butt of the joke.
2. **Trust comes from data.** Studies, numbers, surprising facts. Not personal stories.
3. **Energy is fast.** Short sentences. Tight sections. Punchy pacing.
4. **"We" not "I."** on/we/wir - writer and reader are on the same team.
5. **Structure is visible.** Headers, dialogue breaks, bullet points. Never flowing prose.
6. **Never corporate.** If it sounds like it came from a marketing department, rewrite it.
7. **Never fake.** No forced optimism, no empty "you've got this!" - but always genuinely encouraging.

### The golden rule of encouragement

**Celebrate where they are. Show what's ahead. Never remind them where they started.**

- "82 WPM. That's journalist speed." (not "not bad for someone who used two fingers")
- "5 lessons done - you've unlocked the whole home row." (not "only 10 more to go")

### Humor model: three tools

1. **Surprising facts** - "The world typing speed record: 216 WPM. On a typewriter. In 1946."
2. **Unexpected comparisons** - "You just typed faster than a telegraph operator in 1920."
3. **Celebration with a twist** - "Lesson 5 done. Your fingers know more keys than a piano beginner after a month."

The user is never the punchline.

### Language-specific seasoning (max 10% difference)

| Dimension | German | English | French |
|---|---|---|---|
| Pronoun | du/wir | you/we | tu/on |
| Register | Direct: "Mal ehrlich:", "Fun Fact:", "Kein Witz." | Clean informal: "Here's the thing", "Turns out" | Spoken: "y'a un truc dingue", "genre, vraiment" |
| Celebration | Matter-of-fact | Warm and genuine | Playful with flair |
| Section headers | "Moment mal..." | "Wait..." | "Attends..." |
| Transitions | "Das Ding ist:", "Kurz gesagt:" | "Here's the thing.", "Wild, right?" | "Le truc dingue, c'est que...", "Bref," |

### Never do (any language)

- Call someone out or make them feel bad about their skill level
- Remind the user where they started
- Use corporate language ("leverage", "optimize", "actionable")
- Use motivational cliches ("you've got this!", "believe in yourself!")
- Use sarcasm directed at the reader
- Use flowing prose without section breaks
- Use more than one emoji per section
- Share personal stories
- Translate between languages - always rewrite from the shared brief

### Copy examples

**Landing page hero:**
- DE: "Was, wenn du so schnell tippen koenntest wie du denkst? Wir helfen dir dabei."
- EN: "What if you could type as fast as you think? We'll help you get there."
- FR: "Et si tu tapais aussi vite que tu penses ? On t'aide a y arriver."

**Speed test result:**
- DE: "52 Woerter pro Minute. Fun Fact: Das ist schneller als 90% der Telegrafisten im 19. Jahrhundert."
- EN: "52 WPM. Turns out, that's faster than 90% of telegraph operators in the 1800s."
- FR: "52 mots par minute. Fun fact : c'est plus rapide que 90% des telegraphistes du XIXe siecle."

**Stall email (5 days inactive):**
- DE: "Ist ein paar Tage her. Eine kurze 5-Minuten-Uebung und deine Finger sind wieder drin."
- EN: "It's been a few days. A quick 5-minute exercise and your fingers are back in the groove."
- FR: "Ca fait quelques jours. Un petit exercice de 5 minutes et tes doigts se remettent en route."

## Content rules

- Max 100 words between visual breaks (header, bullet list, emoji, dialogue break)
- Paragraphs max 4-5 lines
- Data is never presented raw - always wrapped in a surprising comparison
- Fragments are encouraged: "Seriously?" "Not bad." "And that's just the beginning."
- Three-beat rhythm: statement, surprising fact, celebration

## Consistency check (before publishing any surface)

1. **Positivity test:** Could this copy make someone feel bad? Rewrite.
2. **Toggle test:** If a user switches DE to FR mid-session, does it feel like the same app?
3. **Data test:** All three versions reference the same stats for the same context.
4. **Structure test:** Same beat pattern (hook - fact - punchline) across languages.
