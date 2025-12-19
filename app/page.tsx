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

        <div className="w-full max-w-2xl mx-auto space-y-6 mt-3">
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

      <footer className="py-6 border-t">
        <div className="max-w-2xl px-4 text-center text-xs text-muted-foreground flex flex-col md:flex-row justify-between mx-auto gap-4 md:gap-0">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="https://speedflare.io" className="hover:text-foreground">
              Speedflare
            </a>
            <a href="https://favicone.com" className="hover:text-foreground">
              Favicone
            </a>
            <a href="https://blobcdn.com" className="hover:text-foreground">
              BlobCDN
            </a>
            <a href="https://upset.dev" className="hover:text-foreground">
              upset.dev
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <p>
              © 2018-{new Date().getFullYear()}{" "}
              <Link href="/" className="hover:text-foreground">
                Statically
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
