/**
 * RESERVED ROUTE — product detail page (STUB, not built in this task).
 *
 * This route is scaffolded so that public product-detail pages can be added
 * later WITHOUT re-platforming. The plan:
 *
 *   - Server-render public product data from a PUBLIC Supabase view that is
 *     protected by Row Level Security (RLS), read via the server-side client
 *     factory in `lib/supabase/server.ts` using the anon/public key only.
 *   - NEVER use the service_role key here or anywhere that reaches the browser.
 *   - Generate metadata per product (title/description/OG) via `generateMetadata`.
 *   - Optionally `generateStaticParams` from the public view for static rendering.
 *
 * For now it renders nothing meaningful and is intentionally inert. Uncomment
 * and implement when the data layer is ready.
 *
 * Example (future):
 *
 *   import { notFound } from "next/navigation";
 *   import { createServerClient } from "@/lib/supabase/server";
 *
 *   export async function generateMetadata({ params }) {
 *     const { slug } = await params;
 *     const supabase = createServerClient();
 *     const { data } = await supabase
 *       .from("public_products")      // RLS-protected public view
 *       .select("name, summary")
 *       .eq("slug", slug)
 *       .single();
 *     if (!data) return {};
 *     return { title: data.name, description: data.summary };
 *   }
 *
 *   export default async function ProductPage({ params }) {
 *     const { slug } = await params;
 *     const supabase = createServerClient();
 *     const { data: product } = await supabase
 *       .from("public_products")
 *       .select("*")
 *       .eq("slug", slug)
 *       .single();
 *     if (!product) notFound();
 *     return (/* render product * /);
 *   }
 */

import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // Consume the param so the route is well-typed, then 404 until implemented.
  await params;
  notFound();
}
