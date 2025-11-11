import OLEVLogo from "./OLEVLogo";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <OLEVLogo className="w-32 h-10 mb-4" animated={false} />
            <p className="text-muted-foreground font-medium">Systems that ship.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('capabilities')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-capabilities"
                >
                  Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => console.log('Navigate to case studies')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-case-studies"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => console.log('Navigate to contact')}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              hello@olev.solutions
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} OLEV — Systems that ship.</p>
        </div>
      </div>
    </footer>
  );
}
