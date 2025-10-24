import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground italic mb-8">Last Updated: October 22, 2025</p>

          <section className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-foreground/80 mb-4">
                Welcome to Slixo ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application Slixo (the "App").
              </p>
              <p className="text-foreground/80">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the App.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">1.1 Personal Information You Provide</h3>
              <p className="text-foreground/80 mb-3">We collect information that you voluntarily provide when using the App:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li><strong className="text-foreground">Account Information</strong>: Email address, name, phone number (optional)</li>
                <li><strong className="text-foreground">Profile Information</strong>: Date of birth, gender, hair type, skin type, profile picture</li>
                <li><strong className="text-foreground">Booking Information</strong>: Appointment details, service preferences, booking history</li>
                <li><strong className="text-foreground">Payment Information</strong>: We do not store payment card details directly</li>
                <li><strong className="text-foreground">Reviews and Ratings</strong>: Comments, ratings, and photos you share about salons</li>
                <li><strong className="text-foreground">Communications</strong>: Messages you send through the App, support requests</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">1.2 Information Automatically Collected</h3>
              <p className="text-foreground/80 mb-3">When you use the App, we automatically collect certain information:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li><strong className="text-foreground">Location Data</strong>: We collect precise location data (GPS) to show nearby salons and calculate distances. You can disable location access in your device settings.</li>
                <li><strong className="text-foreground">Device Information</strong>: Device type, operating system, unique device identifiers</li>
                <li><strong className="text-foreground">Usage Data</strong>: App features used, pages viewed, time spent, booking patterns</li>
                <li><strong className="text-foreground">Log Data</strong>: IP address, browser type, access times, referring URLs</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">1.3 Information from Third Parties</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li><strong className="text-foreground">Google Maps</strong>: We use Google Maps API for location services and address search</li>
                <li><strong className="text-foreground">Authentication</strong>: We use Supabase for secure authentication via email OTP</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">2. How We Use Your Information</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.1 Provide and Improve Our Services</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Create and manage your account</li>
                <li>Process and manage bookings</li>
                <li>Connect you with salons and beauty service providers</li>
                <li>Display personalized salon recommendations</li>
                <li>Show your booking history and streak progress</li>
                <li>Send booking confirmations and reminders</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.2 Communication</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Send service-related notifications (booking confirmations, updates, reminders)</li>
                <li>Respond to your comments, questions, and support requests</li>
                <li>Send marketing communications (you can opt-out anytime)</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.3 Analytics and Improvements</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Analyze usage patterns to improve the App</li>
                <li>Track feature performance and user engagement</li>
                <li>Debug and fix technical issues</li>
                <li>Develop new features based on user behavior</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">3. How We Share Your Information</h2>
              
              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mb-6">
                <p className="text-foreground font-semibold">Important: We do not sell your personal information.</p>
              </div>

              <p className="text-foreground/80 mb-3">We may share your information in the following circumstances:</p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.1 Service Providers</h3>
              <p className="text-foreground/80 mb-3">We share information with third-party service providers who help us operate the App:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li><strong className="text-foreground">Supabase</strong>: Database and authentication services (EU/US servers)</li>
                <li><strong className="text-foreground">Google Maps</strong>: Location and mapping services</li>
                <li><strong className="text-foreground">Expo/React Native</strong>: App infrastructure and development tools</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">3.2 Salon Owners</h3>
              <p className="text-foreground/80 mb-3">When you book an appointment, we share necessary information with the salon:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Your name, phone number, and email</li>
                <li>Booking details (date, time, services)</li>
                <li>Special requests or notes</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">4. Data Security</h2>
              <p className="text-foreground/80 mb-3">We implement appropriate technical and organizational security measures to protect your personal information:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li><strong className="text-foreground">Encryption</strong>: All data is encrypted in transit (HTTPS/TLS) and at rest</li>
                <li><strong className="text-foreground">Authentication</strong>: Secure email-based OTP authentication</li>
                <li><strong className="text-foreground">Access Controls</strong>: Limited access to personal information</li>
                <li><strong className="text-foreground">Regular Security Audits</strong>: We review and update security practices regularly</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">5. Your Privacy Rights</h2>
              <p className="text-foreground/80 mb-3">Depending on your location, you may have the following rights:</p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.1 Access and Portability</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Request access to your personal information</li>
                <li>Receive a copy of your data in a portable format</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.2 Correction</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Update or correct inaccurate information</li>
                <li>Edit your profile in the App settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.3 Deletion</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Request deletion of your account and personal information</li>
                <li>Use the "Delete Account" feature in the App</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">5.4 Opt-Out</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Unsubscribe from marketing emails (click "unsubscribe" in emails)</li>
                <li>Disable push notifications in App settings</li>
                <li>Revoke location permissions in device settings</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">6. Location Data</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">6.1 How We Use Location</h3>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Show salons near your current location</li>
                <li>Calculate distances to salons</li>
                <li>Provide location-based search results</li>
                <li>Display salon locations on maps</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">6.2 How to Control Location Access</h3>
              <p className="text-foreground/80 mb-3">You can control location permissions in your device settings:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li><strong className="text-foreground">Android</strong>: Settings → Apps → Slixo → Permissions → Location</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">7. Children's Privacy</h2>
              <p className="text-foreground/80">
                Slixo is not intended for children under 13 years old. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">8. International Data Transfers</h2>
              <p className="text-foreground/80 mb-3">Your information may be transferred to and stored on servers located outside your country:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li><strong className="text-foreground">Supabase</strong>: Servers in EU/US regions</li>
                <li><strong className="text-foreground">Google Maps</strong>: Global infrastructure</li>
              </ul>
              <p className="text-foreground/80 mt-3">We ensure appropriate safeguards are in place for such transfers.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">9. Summary of Your Privacy</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border mt-6">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Category</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">What We Collect</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Why</th>
                      <th className="border border-border p-3 text-left font-semibold text-foreground">Your Control</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 text-foreground font-medium">Account</td>
                      <td className="border border-border p-3 text-foreground/80">Email, name, phone</td>
                      <td className="border border-border p-3 text-foreground/80">Authentication, bookings</td>
                      <td className="border border-border p-3 text-foreground/80">Edit in profile</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 text-foreground font-medium">Location</td>
                      <td className="border border-border p-3 text-foreground/80">GPS coordinates</td>
                      <td className="border border-border p-3 text-foreground/80">Find nearby salons</td>
                      <td className="border border-border p-3 text-foreground/80">Device settings</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-foreground font-medium">Bookings</td>
                      <td className="border border-border p-3 text-foreground/80">Appointment details</td>
                      <td className="border border-border p-3 text-foreground/80">Service functionality</td>
                      <td className="border border-border p-3 text-foreground/80">View/delete in app</td>
                    </tr>
                    <tr className="bg-muted/50">
                      <td className="border border-border p-3 text-foreground font-medium">Reviews</td>
                      <td className="border border-border p-3 text-foreground/80">Ratings, comments, photos</td>
                      <td className="border border-border p-3 text-foreground/80">Community features</td>
                      <td className="border border-border p-3 text-foreground/80">Edit/delete reviews</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 text-foreground font-medium">Usage</td>
                      <td className="border border-border p-3 text-foreground/80">App interactions</td>
                      <td className="border border-border p-3 text-foreground/80">Improve experience</td>
                      <td className="border border-border p-3 text-foreground/80">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-accent/10 border-l-4 border-accent p-4 rounded-r-lg mt-6">
                <p className="text-foreground font-semibold">We never sell your data.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">10. Contact Us</h2>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <p className="text-foreground/80 mb-3">If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, please contact us:</p>
                <p className="text-foreground mb-2"><strong>Email</strong>: support@slixo.app</p>
                <p className="text-foreground/80"><strong>Response Time</strong>: We aim to respond within 48 hours</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">11. Changes to This Privacy Policy</h2>
              <p className="text-foreground/80 mb-3">We may update this Privacy Policy from time to time. We will notify you of changes by:</p>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>Updating the "Last Updated" date</li>
                <li>Posting a notice in the App</li>
                <li>Sending you an email (for significant changes)</li>
              </ul>
              <p className="text-foreground/80 mt-3">Your continued use of the App after changes constitutes acceptance of the updated policy.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4 mt-8">12. Consent</h2>
              <p className="text-foreground/80">By using Slixo, you consent to this Privacy Policy and agree to its terms.</p>
            </div>

            <div className="mt-12 pt-8 border-t-2 border-border">
              <p className="text-foreground mb-2"><strong>Privacy Policy Version</strong>: 1.0</p>
              <p className="text-foreground mb-2"><strong>Effective Date</strong>: October 22, 2025</p>
              <p className="text-foreground font-semibold">Slixo - Your Personal Beauty Assistant</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
