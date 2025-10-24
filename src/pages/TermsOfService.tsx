import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-smooth">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-card rounded-xl shadow-elegant p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground italic mb-8">Last Updated: October 22, 2025</p>

          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-foreground/80">
                By accessing and using the Slixo mobile application ("App"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms, please do not use the App.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">2. Use License</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.1 Permission is Granted To:</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Download and use the App for personal, non-commercial purposes</li>
                <li>Create an account and use App features</li>
                <li>Book salon appointments through the App</li>
                <li>Share reviews and ratings of services</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.2 You Must Not:</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Modify or copy the App materials</li>
                <li>Use the App for any commercial purpose without authorization</li>
                <li>Attempt to decompile or reverse engineer the App</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the App to another person or "mirror" the materials on any other server</li>
                <li>Use the App in any way that is unlawful or fraudulent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">3. User Accounts</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.1 Account Creation</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the confidentiality of your account</li>
                <li>You are responsible for all activities that occur under your account</li>
                <li>You must notify us immediately of any unauthorized use of your account</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.2 Account Types</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li><strong className="text-foreground">Customer Accounts</strong>: For users who book salon services</li>
                <li><strong className="text-foreground">Salon Owner Accounts</strong>: For businesses offering salon services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">4. Bookings and Appointments</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.1 Customer Responsibilities</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Provide accurate information when booking appointments</li>
                <li>Arrive on time for scheduled appointments</li>
                <li>Cancel or reschedule appointments with reasonable notice</li>
                <li>Pay for services as agreed with the salon</li>
              </ul>

              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg my-6">
                <p className="text-foreground font-semibold">Important: Slixo is a platform that connects customers with salons. We do not provide beauty services directly. All services are provided by independent salon businesses.</p>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.2 Salon Owner Responsibilities</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Maintain accurate information about services, pricing, and availability</li>
                <li>Honor confirmed bookings or provide reasonable notice of changes</li>
                <li>Provide services as advertised</li>
                <li>Handle customer payments directly (Slixo does not process payments)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.3 Cancellation Policy</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Customers may cancel or reschedule bookings through the App</li>
                <li>Cancellation policies are set by individual salons</li>
                <li>Slixo is not responsible for salon-specific cancellation fees</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">5. Reviews and Ratings</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.1 User-Generated Content</h3>
              <p className="text-foreground/80 mb-3">When you post reviews, ratings, or photos:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>You grant Slixo a license to use, modify, and display your content</li>
                <li>You represent that your content is accurate and honest</li>
                <li>You will not post offensive, defamatory, or illegal content</li>
                <li>You own the rights to any photos you upload</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.2 Content Moderation</h3>
              <p className="text-foreground/80 mb-3">We reserve the right to:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Remove reviews that violate our policies</li>
                <li>Suspend accounts that repeatedly violate guidelines</li>
                <li>Edit or remove inappropriate content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">6. Gamification and Rewards</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">6.1 Streak System</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>The streak system is a loyalty feature based on booking frequency</li>
                <li>Streak rules and calculations are subject to change</li>
                <li>Badges and achievements have no monetary value</li>
                <li>Slixo may modify or discontinue the streak system at any time</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">6.2 Points and Benefits</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Points are for tracking purposes only and have no cash value</li>
                <li>Benefits may be modified or discontinued without notice</li>
                <li>Points and streaks are tied to your account and non-transferable</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">7. Payment and Fees</h2>
              
              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mb-4">
                <p className="text-foreground font-semibold">Important: Slixo does NOT process payments for salon services. All payments are handled directly between customers and salons.</p>
              </div>

              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>The App is free to download and use</li>
                <li>Salons set their own service prices</li>
                <li>Payment for services is made directly to the salon</li>
                <li>Slixo is not responsible for payment disputes between customers and salons</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">8. Privacy and Data Protection</h2>
              <p className="text-foreground/80 mb-4">
                Your use of the App is also governed by our <Link to="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>. Please review our Privacy Policy to understand our practices.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">8.1 Data We Collect</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Account information (email, name, phone)</li>
                <li>Location data (with your permission)</li>
                <li>Booking history and preferences</li>
                <li>Reviews and ratings</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">8.2 Your Rights</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Access your personal data</li>
                <li>Request data deletion</li>
                <li>Opt-out of marketing communications</li>
                <li>Control location permissions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">9. Disclaimer of Warranties</h2>
              <p className="text-foreground/80 mb-3">THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Warranties of merchantability</li>
                <li>Fitness for a particular purpose</li>
                <li>Non-infringement</li>
                <li>Accuracy or reliability of information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">10. Limitation of Liability</h2>
              <p className="text-foreground/80 mb-3">Slixo and its affiliates SHALL NOT BE LIABLE FOR:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Quality of services provided by salons</li>
                <li>Disputes between customers and salons</li>
                <li>Loss or damage to personal property</li>
                <li>Personal injury at salon locations</li>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of data or profits</li>
              </ul>

              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mt-6">
                <p className="text-foreground font-semibold">Platform Role: Slixo is a technology platform that facilitates connections between customers and salons. We are not responsible for the services provided by salon businesses.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">11. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">11.1 Our Property</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>The Slixo name, logo, and branding are our trademarks</li>
                <li>App design, code, and features are protected by copyright</li>
                <li>You may not use our intellectual property without permission</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">11.2 Your Content</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>You retain ownership of content you submit (reviews, photos)</li>
                <li>You grant us a license to use your content on the platform</li>
                <li>You are responsible for ensuring you have rights to content you upload</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">12. Termination</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">12.1 Your Right to Terminate</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>You may delete your account at any time through the App settings</li>
                <li>Deletion will remove your personal information within 30 days</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">12.2 Our Right to Terminate</h3>
              <p className="text-foreground/80 mb-3">We may suspend or terminate your account if:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>You violate these Terms</li>
                <li>You engage in fraudulent activity</li>
                <li>You abuse the platform or other users</li>
                <li>We are required to do so by law</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">13. Governing Law</h2>
              <p className="text-foreground/80">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">14. Changes to Terms</h2>
              <p className="text-foreground/80 mb-3">We reserve the right to modify these Terms at any time. We will notify you of changes by:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Updating the "Last Updated" date</li>
                <li>Posting a notice in the App</li>
                <li>Sending an email notification (for significant changes)</li>
              </ul>
              <p className="text-foreground/80 mt-3">Your continued use of the App after changes constitutes acceptance of the updated Terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">15. Contact Information</h2>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <p className="text-foreground/80 mb-3">If you have questions about these Terms & Conditions, please contact us:</p>
                <p className="text-foreground mb-2"><strong>Email</strong>: support@slixo.app</p>
                <p className="text-foreground/80"><strong>Response Time</strong>: We aim to respond within 48 hours</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">16. Severability</h2>
              <p className="text-foreground/80">
                If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">17. Entire Agreement</h2>
              <p className="text-foreground/80">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Slixo regarding the use of the App.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-border">
              <p className="text-foreground mb-2"><strong>Terms & Conditions Version</strong>: 1.0</p>
              <p className="text-foreground mb-2"><strong>Effective Date</strong>: October 22, 2025</p>
              <p className="text-foreground font-semibold">Slixo - Your Personal Beauty Assistant</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
