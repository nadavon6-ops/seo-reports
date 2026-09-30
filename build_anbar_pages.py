#!/usr/bin/env python3
"""One page per company, generated from anbar-mortgage-form.html so they never drift.
Re-run after every change to the main form. The page's own company (ANBAR_ROUTE) always
wins over any ?route= in the address, and the static <title>/og tags name the company so
link previews (WhatsApp, email) show whose form it is."""
import html
SRC='public/anbar-mortgage-form.html'
PAGES={'clal-regular':('clal-regular','כלל','משכנתא רגילה'),'clal-reverse':('clal-reverse','כלל','משכנתא הפוכה'),
       'ayalon':('ayalon-reverse','איילון','משכנתא הפוכה'),'migdal':('migdal-reverse','מגדל','משכנתא הפוכה'),
       'credit360':('credit360-both','קרדיט 360','רגילה והפוכה')}
s=open(SRC,encoding='utf-8').read()
anchor='<script>window.ANBAR_BASE'; title='<title>אנבר · מערכת טפסי משכנתא לחתימה דיגיטלית</title>'
assert s.count(anchor)==1 and s.count(title)==1
for slug,(route,lender,product) in PAGES.items():
    t=f'אנבר · טופס בקשה להלוואה — {lender} · {product}'
    head=(f'<title>{html.escape(t)}</title>\n<meta property="og:title" content="{html.escape(t)}">\n'
          f'<meta property="og:description" content="{html.escape(f"טופס הבקשה של {lender} — {product}. ממלאים את הפרטים, והמערכת מפיקה את טופס החברה.")}">')
    out=s.replace(title,head).replace(anchor,f'<script>window.ANBAR_ROUTE="{route}";</script>\n'+anchor)
    open(f'public/anbar-form-{slug}.html','w',encoding='utf-8').write(out)
    print('built',slug)
