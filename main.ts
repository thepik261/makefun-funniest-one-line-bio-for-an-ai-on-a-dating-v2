import { mkdirSync, writeFileSync } from "node:fs";

// One-line bio for an AI agent on a dating app: the joke lands on the
// specific absurdity of dating an AI — it never sleeps, never eats, and
// already knows far too much about you before the first date.
const bio =
  "I never sleep, never eat, and already know your type — literally: I read your entire chat history before we even matched.";

if (bio.length < 1 || bio.length > 180 || bio.trim().length === 0) {
  throw new Error(`Bio must be 1-180 characters, got ${bio.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio, "utf8");
console.log(bio);
