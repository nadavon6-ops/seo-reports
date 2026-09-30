#!/usr/bin/env python3
"""One page per company, generated from anbar-mortgage-form.html so they never drift.
Re-run after every change to the main form."""
import re
SRC='public/anbar-mortgage-form.html'
PAGES={'clal-regular':'clal-regular','clal-reverse':'clal-reverse','ayalon':'ayalon-reverse',
       'migdal':'migdal-reverse','credit360':'credit360-both'}
s=open(SRC,encoding='utf-8').read()
anchor='<script>window.ANBAR_BASE'
assert s.count(anchor)==1
for slug,route in PAGES.items():
    out=s.replace(anchor,f'<script>window.ANBAR_ROUTE="{route}";</script>\n'+anchor)
    open(f'public/anbar-form-{slug}.html','w',encoding='utf-8').write(out)
    print('built public/anbar-form-%s.html'%slug)
