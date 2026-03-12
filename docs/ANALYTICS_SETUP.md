# Analytics Setup

This site now uses a GTM-only analytics path.

## Environment

Set `NEXT_PUBLIC_GTM_ID` only in production environments.

Optional but recommended:

- Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- Leave `NEXT_PUBLIC_GTM_ID` unset locally unless you are explicitly testing analytics.

## What The Site Sends

The client instrumentation now pushes these `dataLayer` events:

- `page_context`
- `nav_click`
- `cta_click`
- `contact_click`
- `generate_lead`
- `scroll_depth`
- `section_view`

The most useful event parameters are:

- `page_path`
- `page_type`
- `page_title`
- `page_location`
- `label`
- `location`
- `destination`
- `service_area`
- `contact_method`
- `lead_source`
- `depth_percentage`
- `section`

## Recommended GTM Configuration

### 1. GA4 Base Tag

Create a Google tag or GA4 configuration tag in GTM for your GA4 property.

Recommended approach for this implementation:

- Do not rely on automatic SPA pageviews.
- Fire pageviews from the `page_context` custom event instead.

If you do this, disable automatic pageview sending in the GA4 configuration path to avoid duplicates.

### 2. Pageview Trigger

Create a Custom Event trigger:

- Event name: `page_context`

Create a GA4 Event tag:

- Event name: `page_view`

Pass these parameters through:

- `page_location` -> `{{Event Parameter page_location}}`
- `page_path` -> `{{Event Parameter page_path}}`
- `page_title` -> `{{Event Parameter page_title}}`
- `page_type` -> `{{Event Parameter page_type}}`

### 3. Navigation And CTA Events

Create Custom Event triggers for:

- `nav_click`
- `cta_click`
- `contact_click`
- `generate_lead`

Create matching GA4 Event tags:

- `nav_click`
- `cta_click`
- `contact_click`
- `generate_lead`

Pass through these parameters where present:

- `label`
- `location`
- `destination`
- `page_path`
- `page_type`
- `service_area`
- `contact_method`
- `lead_source`

Mark `generate_lead` as a Key Event in GA4.

### 4. Scroll Depth Tracking

The site already sends granular scroll events from code at these milestones:

- `25`
- `50`
- `75`
- `90`

You do not need a GTM Scroll Depth trigger unless you want a second, separate implementation.

Create a Custom Event trigger:

- Event name: `scroll_depth`

Create a GA4 Event tag:

- Event name: `scroll_depth`

Pass through:

- `depth_percentage`
- `page_path`
- `page_type`

Recommended: disable GA4 Enhanced Measurement scroll tracking if you want one clean scroll-depth data source instead of mixing GA4's default `scroll` event with the custom `scroll_depth` event.

### 5. Section Visibility

The site emits `section_view` when a tagged section becomes visible.

Create a Custom Event trigger:

- Event name: `section_view`

Create a GA4 Event tag:

- Event name: `section_view`

Pass through:

- `section`
- `label`
- `page_path`
- `page_type`

## Recommended GA4 Custom Dimensions

Register these as event-scoped custom dimensions in GA4:

- `page_type`
- `label`
- `location`
- `destination`
- `service_area`
- `contact_method`
- `lead_source`
- `depth_percentage`
- `section`

## Lead Quality Extensions

To move from engagement to business usefulness, add downstream CRM feedback later:

- `qualify_lead`
- `working_lead`
- `close_convert_lead`
- `disqualify_lead`

That is the layer that tells you which pages and CTAs generate real research-service demand, not just clicks.