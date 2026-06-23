# S. Suresh & Associates — Content Checklist

This document tracks all unverified placeholder elements on the website. Because the site represents a regulated financial services firm in Nepal, it is critical to replace all mock data before moving to production.

To update this content, modify the corresponding fields in the centralized data file:
📂 [siteContent.js](file:///d:/Code/work/ssureshandassociates/src/data/siteContent.js)

Once all placeholders are replaced, toggle `isStaging: false` at the top of that file to hide all staging badges and banners.

---

## Content Verification Action Plan

### 1. Corporate Contact Info
These are based on current footer details but must be verified:
- [ ] **Office Address**: Current value: `Tinkune, Kathmandu, Nepal`
- [ ] **Direct Phone**: Current value: `+977-9851135421`
- [ ] **Partner Email**: Current value: `2015casuresh@gmail.com`
- [ ] **Office Hours**: Current value: `Sunday - Friday: 10:00 AM - 5:00 PM`
- [ ] **Interactive Map Embed**: Ensure the coordinates point to the correct building pin.

### 2. Practice Metrics & Statistics
These values are mock statistics and must be verified or disabled:
- [ ] **Years in Practice**: Current placeholder: `10+`
- [ ] **Audits Completed**: Current placeholder: `500+`
- [ ] **Active Corporate Clients**: Current placeholder: `120+`
- [ ] **Filing Accuracy**: Current placeholder: `100%`

### 3. Practice Area Sub-Services
The list of detailed sub-services under the 5 confirmed categories needs checking:
- [ ] **Auditing**: Verify statutory, internal, NFRS, and forensic listings.
- [ ] **Tax Planning**: Verify corporate tax plans, tax health checks, and tribunal representation.
- [ ] **GST Filing**: Verify VAT monthly filing, custom tax, refund claims, and reverse charge options.
- [ ] **Accounting**: Verify bookkeeping, payroll, and MIS dashboard setups.
- [ ] **Financial Advisory**: Verify start-up registration, FDI approvals, due diligence, and valuation reviews.

### 4. Client Testimonials
- [x] **Client Quote**: Replace the mock tax audit quote with a real client quote.
- [x] **Author & Company**: Replace `[Director of Operations]` and `[Leading Trading Corporation, Kathmandu]` with real details or obtain approval to remove.

### 5. Pillars of Accountability (Trust Points)
- [ ] **Confidentiality claims**: Verify description text.
- [ ] **Partner Access claims**: Confirm if direct partner-level access is guaranteed for all clients.
- [ ] **Deadline Adherence claims**: Confirm on-time record claims.
- [ ] **Compliance Guarantee claims**: Confirm standard descriptions.

### 6. Team & Staff Directory
- [x] **Partner Profile**: Replace `[Partner Name]` and bio with CA. Suresh Sharma's verified details.
- [x] **Associate Profile**: Replace `[CA Associate Name]` and bio with operations leader details.
- [x] **Auditor Profile**: Replace `[Auditor Name]` and bio with staff details.
- [x] **Professional Credentials**: Verify ICAN / tax representation registrations.

### 7. Regulatory Insights / Blog
- [ ] **Article Templates**: Swap out draft outlines (NFRS for SMEs, FY 2082/83 tax deadlines) for real informational articles when ready, or disable block.

---

## Developer Instructions for Go-Live

To transition the site from "Staging" to "Production":
1. Open [siteContent.js](file:///d:/Code/work/ssureshandassociates/src/data/siteContent.js).
2. Set the `isStaging` property to `false`:
   ```javascript
   export const siteConfig = {
     isStaging: false,
     // ...
   };
   ```
3. Run `npm run build` to generate the clean production bundles. All warning banners and amber staging tags will be automatically removed from the UI.
