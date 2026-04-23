import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, info) { console.error('Bard Santner error boundary:', error, info); }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-cream-100">
          <div className="text-center max-w-md">
            <p className="font-serif italic text-xl text-gold-600">a quiet hazard</p>
            <h1 className="mt-2 font-display text-4xl text-navy-900">
              Something went out of bounds.
            </h1>
            <p className="mt-4 text-ink-500 text-sm">
              Refresh the page — if the issue lingers, write to
              {' '}<a href="mailto:golf@bardsantner.com" className="prose-link">golf@bardsantner.com</a>
              {' '}and our team will take it up.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="press-physics px-6 py-3 bg-navy-800 text-cream-50 text-xs tracking-[0.18em] uppercase hover:bg-navy-900 transition-colors"
              >
                Refresh
              </button>
              <a
                href="/"
                className="press-physics px-6 py-3 border border-gold-500 text-navy-900 text-xs tracking-[0.18em] uppercase hover:bg-gold-500 hover:text-navy-900 transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
