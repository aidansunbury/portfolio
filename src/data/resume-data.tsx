import { BerkeleyLogo, GivefrontLogo, OwnerLogo } from "@/images/logos";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Aidan Sunbury",
  initials: "AS",
  location: "San Francisco, California, PT",
  locationLink: "https://www.google.com/maps/place/San+Francisco",
  about:
    "Software engineer building agent platforms and the infrastructure underneath them",
  summary:
    "I am a software engineer helping restaurants grow at Owner.com in San Francisco. Most of my work has been on our internal coding agent and other dev-ex pursuits, while also dabbling in our customer-facing Owner agent. Previously, I was a founding engineer at Givefront, where I worked on financial software for nonprofits.",
  avatarUrl: "https://avatars.githubusercontent.com/u/64103161?v=4",
  personalWebsiteUrl: "https://aidansunbury.com",
  contact: {
    email: "aidansunbury@gmail.com",
    tel: "+19254515546",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/aidansunbury",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aidan-sunbury/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "UC Berkeley",
      degree: "B.S. Electrical Engineering & Computer Sciences (EECS)",
      start: "",
      end: "",
    },
  ],
  work: [
    {
      company: "Owner.com",
      link: "https://owner.com",
      badges: [],
      title: "Senior Software Engineer (promoted from SWE, Sep 2026)",
      logo: OwnerLogo,
      start: "Feb 2026",
      end: "Present",
      description: (
        <>
          <p>
            Owner builds the AI agent that runs restaurants&rsquo; online presence.
            I work on the customer-facing Owner agent and, before that, on
            Forge — our internal cloud coding agent.{" "}
            <a
              className="underline"
              href="https://building.owner.com/self-improving-agent"
            >
              More on the self-improving agent
            </a>
            .
          </p>
          <p className="mt-2 font-semibold">Owner Agent (customer-facing)</p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>
              Built Support View, an agent-assisted console that gives support
              reps Owner-agent capabilities grounded in the context of live
              conversations — cut average handle time 30% across an 80-person
              support org.
            </li>
            <li>
              Built automatic detection and closure of tool-functionality gaps
              in the agent — the system finds where its own tools fall short
              and builds what&rsquo;s missing.
            </li>
            <li>
              Implemented cross-provider failover for the agent harness, with
              automated chaos testing to continuously verify failover actually
              works when a provider goes down.
            </li>
          </ul>
          <p className="mt-2 font-semibold">
            Owner Forge (internal cloud coding agent)
          </p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>
              Migrated agent sandbox execution from self-hosted Kubernetes to
              Modal — startup went from minutes to under ten seconds and we
              saved tens of thousands of dollars per month, all with a
              zero-downtime cutover.
            </li>
            <li>
              Led the platform&rsquo;s migration from a Claude Code–based runtime to
              OpenCode, introducing an inference gateway that routes to
              cheaper models and tracks usage accurately per tenant.
            </li>
            <li>
              Shipped Forge&rsquo;s first web GUI by building on OpenCode&rsquo;s existing
              web interface — state-of-the-art UX with near-zero maintenance
              burden instead of a bespoke frontend we&rsquo;d have to maintain.
            </li>
            <li>
              Designed the identities system, decoupling agent automations
              from individual users&rsquo; spend limits and unlocking org-level
              automation.
            </li>
            <li>
              Built in-workspace browsers and Android emulators streaming over
              a display server, letting agents see and interact with real
              browsers and mobile apps — dramatically better feedback loops
              than text-only tool output.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Givefront",
      link: "https://givefront.com",
      badges: [],
      title: "CTO & Founding Engineer",
      logo: GivefrontLogo,
      start: "Feb 2024",
      end: "Jan 2026",
      description: (
        <>
          <p>
            Joined as the first engineer and built Givefront Spend, a
            corporate card and spend management platform for nonprofits, from
            zero to 100+ organizations.
          </p>
          <ul className="mt-1 list-inside list-disc space-y-1">
            <li>
              Shipped the core card platform: card issuance, role-based access
              controls, configurable spend limits, and bill pay.
            </li>
            <li>
              Owned all infrastructure as code: isolated dev/staging/prod
              environments across separate AWS accounts, an event-driven
              backend with 25+ subscribers handling the transaction lifecycle,
              and encryption of sensitive bank account data at rest.
            </li>
            <li>
              Built the accounting integrations (QuickBooks, Xero) and an AI
              receipt-processing pipeline that extracts and categorizes
              expenses automatically.
            </li>
            <li>
              The v1 product was an accounting automation tool I built as
              founding engineer — it secured the initial customers and led to
              the Spend pivot.
            </li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "TypeScript",
    "Go",
    "Python",
    "React",
    "AWS",
    "SST",
    "Kubernetes",
    "Modal",
    "Postgres",
    "Event-driven systems",
    "LLM agents",
    "Infrastructure as code",
  ],
  projects: [
    {
      title: "vibevarium",
      techStack: ["Side Project", "TypeScript", "Cloudflare", "MCP"],
      description:
        "A platform where every vibe-coded app is a self-contained world — its own repo, deploy, domain, and auth, all grown from one control plane",
      link: {
        label: "vibevarium.com",
        href: "https://vibevarium.com",
      },
    },
  ],
  blogs: [
    {
      title: "Why we built our background agent",
      url: "https://builders.ramp.com/post/why-we-built-our-background-agent",
      note: "Ramp's engineering blog on taking their coding agent out of the interactive loop and running it in the background — closely related to my work on Forge.",
    },
    {
      title: "Zanzibar",
      url: "https://authzed.com/zanzibar",
      note: "AuthZed's writeup of Google's authorization model — the design space behind Forge identities and decoupling automations from user spend limits.",
    },
    {
      title: "opencode reloaded",
      url: "https://anoma.ly/notes/opencode-reloaded/",
      note: "Notes on the OpenCode agent harness that Forge's runtime is built on.",
    },
  ],
} as const;
