import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Runtime Error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#FFFAF5] flex items-center justify-center px-6 text-center text-stone-900">
          <div className="max-w-md bg-white p-10 rounded-3xl border border-stone-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              !
            </div>
            <h2 className="text-2xl font-bold mb-3 font-heading">Something went wrong</h2>
            <p className="text-stone-500 text-sm mb-6 leading-relaxed">
              We encountered an unexpected issue while loading this page. Don't worry, your cart and session data are safe.
            </p>
            <button
              onClick={this.handleReload}
              className="bg-stone-900 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-md"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
