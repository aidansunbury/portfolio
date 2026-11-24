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
    "I build AI agent systems and the platforms they run on. At Owner.com I work on the customer-facing Owner agent and led the infrastructure of Forge, our internal cloud coding agent — including a zero-downtime migration that cut sandbox startup from minutes to seconds and saves tens of thousands of dollars a month. Before that I was the founding engineer and CTO at Givefront, where I built a corporate card and spend management platform for nonprofits from zero to 100+ organizations. UC Berkeley EECS.",
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
      title: "aidan-shadcn-registry",
      techStack: ["Side Project", "TypeScript", "shadcn/ui"],
      description:
        "Personal component registry installable via the shadcn CLI",
      link: {
        label: "github.com",
        href: "https://github.com/aidansunbury/aidan-shadcn-registry",
      },
    },
    {
      title: "center-a-div",
      techStack: ["Side Project", "Tailwind"],
      description:
        "For when you have to center a div, or make some other layout with Tailwind CSS",
      link: {
        label: "github.com",
        href: "https://github.com/aidansunbury/center-a-div",
      },
    },
    {
      title: "docs-agent",
      techStack: ["Side Project", "AI"],
      description: "Agent for searching codebases and their docs",
      link: {
        label: "github.com",
        href: "https://github.com/aidansunbury/docs-agent",
      },
    },
  ],
} as const;
