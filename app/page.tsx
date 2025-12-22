import UrlConverter from "@/components/url-converter";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-4 pt-8 md:pt-14 flex-1">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs md:text-sm mb-8">
            <a
              href="https://speedflare.io"
              className="bg-yellow-50 hover:bg-yellow-100 rounded-xl p-0 md:p-2"
            >
              ⚡ Speedflare — Check your website performance worldwide!
            </a>
          </div>
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold text-balance">
              <Image
                className="mx-auto"
                src="/images/branding/statically-logo-dark.svg"
                alt="Statically logo"
                width={175}
                height={37}
              />
            </h1>
          </Link>
          <p className="text-lg text-muted-foreground text-balance mt-4 tracking-tight">
            A free CDN for Git repositories, npm, and open source projects
          </p>
        </div>

        {/* URL Converter */}
        <UrlConverter />

        <div className="w-full max-w-3xl mx-auto space-y-6 mt-3">
          <div className="space-y-3">
            <h3 className="text-base font-semibold">About</h3>
            <div className="border rounded-lg border-foreground/10 bg-background p-4 space-y-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  <strong>Statically</strong> is a free, fast global content
                  delivery network (CDN) for open-source projects. It helps
                  developers easily distribute static assets such as CSS and
                  JavaScript libraries. Powered by{" "}
                  <a href="https://bunny.net/?ref=statically.io">
                    <strong>bunny.net</strong>
                  </a>{" "}
                  and{" "}
                  <a href="https://www.cloudflare.com/?ref=statically.io">
                    <strong>Cloudflare</strong>
                  </a>
                  , Statically delivers content worldwide with ultra-low
                  latency. It supports popular platforms like GitHub, GitLab,
                  Bitbucket, and npm, making it simple and reliable for
                  developers to serve their files.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold">Important Notice</h3>
            <div className="border rounded-lg border-foreground/10 bg-background p-4 space-y-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Due to abuse and high traffic, the{" "}
                  <code className="text-xs">/img/</code> endpoint has been
                  disabled. We apologize for the inconvenience and appreciate
                  your understanding. Please use Statically responsibly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-12 md:py-20 flex flex-col gap-16">
        <div className="text-center mx-auto">
          <h2 className="font-bold">Platinum Sponsors</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-8 items-center justify-center">
            <a href="https://bunny.net/?ref=statically.io">
              <Image
                src="/images/sponsors/bunny.net.svg"
                alt="bunny.net logo"
                width={135}
                height={39}
              />
            </a>

            <a href="https://www.cloudflare.com/?ref=statically.io">
              <Image
                src="/images/sponsors/cloudflare.svg"
                alt="Cloudflare logo"
                width={135}
                height={50}
              />
            </a>

            <a href="https://www.dewaweb.com/?ref=statically.io">
              <Image
                src="/images/sponsors/dewaweb.png"
                alt="Dewaweb logo"
                width={135}
                height={46}
              />
            </a>
          </div>
        </div>

        <div className="text-center mx-auto">
          <h2 className="font-bold">Bronze Sponsors</h2>
          <div className="mt-8 flex flex-col md:flex-row gap-8 items-center justify-center">
            <a href="https://www.cloudkilat.com/?ref=statically.io">
              <Image
                src="/images/sponsors/cloudkilat.png"
                alt="Cloudkilat logo"
                width={95}
                height={24}
              />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-foreground/10 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-3xl mx-auto px-6 py-12">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between gap-8 text-center md:text-left">
            {/* Brand & Copyright */}
            <div className="space-y-4">
              <Link href="/" className="inline-flex">
                <Image
                  src="/images/branding/statically-logo-dark.svg"
                  width={115}
                  height={24}
                  alt="Statically logo"
                />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A free, fast global CDN for open source.
              </p>
              <p className="text-xs text-muted-foreground/70">
                © 2018–{new Date().getFullYear()}{" "}
                <Link href="/">Statically</Link>.
              </p>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-foreground/90 uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex items-center gap-3 justify-center">
                <a
                  href="https://x.com/staticallyio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Statically on X"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M17.6874 3.0625L12.6907 8.77425L8.37045 3.0625H2.11328L9.58961 12.8387L2.50378 20.9375H5.53795L11.0068 14.6886L15.7863 20.9375H21.8885L14.095 10.6342L20.7198 3.0625H17.6874ZM16.6232 19.1225L5.65436 4.78217H7.45745L18.3034 19.1225H16.6232Z" />
                  </svg>
                </a>

                <a
                  href="https://github.com/staticallyio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Statically on GitHub"
                  className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                  >
                    <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="text-center md:text-left mt-8 text-xs text-muted-foreground leading-relaxed">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
              <p className="mb-2 font-medium text-foreground/80">
                More products:
              </p>
              {[
                { href: "https://speedflare.io", label: "Speedflare" },
                { href: "https://favicone.com", label: "Favicone" },
                { href: "https://blobcdn.com", label: "BlobCDN" },
                { href: "https://indiwtf.com", label: "Indiwtf" },
                { href: "https://upset.dev/fonts", label: "fonts.upset.dev" },
                { href: "https://thedev.id", label: "thedev.id" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
