import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
import pymupdf

pdf_path = 'public/resume.pdf'

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    leftMargin=32,
    rightMargin=32,
    topMargin=24,
    bottomMargin=24
)

styles = getSampleStyleSheet()

primary_color = colors.HexColor('#0F172A') # Slate 900
accent_color = colors.HexColor('#1D4ED8')  # Blue 700
body_color = colors.HexColor('#334155')    # Slate 700
meta_color = colors.HexColor('#475569')    # Slate 600

title_style = ParagraphStyle(
    'TitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=18,
    leading=21,
    textColor=primary_color,
    alignment=1
)

subtitle_style = ParagraphStyle(
    'SubTitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9.5,
    leading=12,
    textColor=accent_color,
    alignment=1
)

contact_style = ParagraphStyle(
    'ContactStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8,
    leading=11,
    textColor=meta_color,
    alignment=1
)

section_heading_style = ParagraphStyle(
    'SectionHeadingStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9.5,
    leading=12,
    textColor=primary_color,
    spaceBefore=4,
    spaceAfter=1
)

job_title_style = ParagraphStyle(
    'JobTitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=8.5,
    leading=11,
    textColor=primary_color
)

job_meta_style = ParagraphStyle(
    'JobMetaStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Oblique',
    fontSize=8,
    leading=10,
    textColor=meta_color,
    alignment=2
)

project_title_style = ParagraphStyle(
    'ProjectTitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=8.5,
    leading=11,
    textColor=primary_color
)

project_tech_style = ParagraphStyle(
    'ProjectTechStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=7.5,
    leading=9.5,
    textColor=meta_color
)

body_text_style = ParagraphStyle(
    'BodyTextStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8,
    leading=10.5,
    textColor=body_color
)

bullet_style = ParagraphStyle(
    'BulletStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8,
    leading=10.5,
    textColor=body_color,
    leftIndent=8,
    firstLineIndent=-5,
    spaceBefore=0.5,
    spaceAfter=0.5
)

story = []

# --- Header ---
story.append(Paragraph('<b>JAINODDIN SHAIK</b>', title_style))
story.append(Spacer(1, 1))
story.append(Paragraph('FULL STACK DEVELOPER &amp; SOFTWARE ARCHITECT', subtitle_style))
story.append(Spacer(1, 1))
story.append(Paragraph(
    'Hyderabad, India &nbsp;|&nbsp; +91 79890 15462 &nbsp;|&nbsp; <font color="#1D4ED8"><u>skjainoddin36654@gmail.com</u></font> &nbsp;|&nbsp; <font color="#1D4ED8"><u>github.com/jainoddin</u></font> &nbsp;|&nbsp; <font color="#1D4ED8"><u>linkedin.com/in/sk-jainoddin-800060250</u></font> &nbsp;|&nbsp; <font color="#1D4ED8"><u>jainoddin.dev</u></font>',
    contact_style
))
story.append(Spacer(1, 2))
story.append(HRFlowable(width='100%', thickness=1.2, color=accent_color, spaceBefore=1, spaceAfter=3))

# --- Summary ---
story.append(Paragraph('PROFESSIONAL SUMMARY', section_heading_style))
story.append(HRFlowable(width='100%', thickness=0.4, color=colors.HexColor('#CBD5E1'), spaceBefore=0.5, spaceAfter=2))
story.append(Paragraph(
    'Results-driven <b>Full Stack Developer &amp; Architect</b> with extensive production experience building scalable, high-performance web applications using <b>React.js, Next.js, TypeScript, Rust, Node.js, and PostgreSQL</b>. Proven track record architecting and deploying production AI SaaS platforms (QuickTool), real-time global news intelligence engines (TodayAround), self-hosted database engines in Rust (TorvaDB), and educational systems (Tansy Academy). Expert in REST &amp; WebSocket APIs, Core Web Vitals optimization, and leading collaborative Agile sprints.',
    body_text_style
))
story.append(Spacer(1, 2))

# --- Technical Skills ---
story.append(Paragraph('TECHNICAL SKILLS', section_heading_style))
story.append(HRFlowable(width='100%', thickness=0.4, color=colors.HexColor('#CBD5E1'), spaceBefore=0.5, spaceAfter=2))
skills_data = [
    [Paragraph('<b>Frontend:</b>', body_text_style), Paragraph('React.js, Next.js (App Router, SSR, SSG), TypeScript, JavaScript (ES6+), Tailwind CSS, Redux Toolkit, HTML5, CSS3', body_text_style)],
    [Paragraph('<b>Backend:</b>', body_text_style), Paragraph('Node.js, Express, Rust (Actix-web), Next.js API Routes, RESTful APIs, WebSockets, Socket.IO, JWT Authentication', body_text_style)],
    [Paragraph('<b>Databases:</b>', body_text_style), Paragraph('PostgreSQL, MySQL, MongoDB, Redis, Schema Design, B-Tree Indexing, ACID Transactions, Query Tuning', body_text_style)],
    [Paragraph('<b>Cloud &amp; Tools:</b>', body_text_style), Paragraph('Docker, Git, Bitbucket, Vercel, Postman, Linux, CI/CD Pipelines, Chrome DevTools, Figma, Google Gemini AI API', body_text_style)],
]
skills_table = Table(skills_data, colWidths=[65, 483])
skills_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('TOPPADDING', (0,0), (-1,-1), 0.5),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
]))
story.append(skills_table)
story.append(Spacer(1, 2))

# --- Work Experience ---
story.append(Paragraph('WORK EXPERIENCE', section_heading_style))
story.append(HRFlowable(width='100%', thickness=0.4, color=colors.HexColor('#CBD5E1'), spaceBefore=0.5, spaceAfter=2))

exp_header = Table([
    [Paragraph('<b>Full Stack Developer</b> &mdash; <i>Tansy Solutions LLC-FZ</i>', job_title_style),
     Paragraph('Remote &nbsp;|&nbsp; Jun 2025 &ndash; Present', job_meta_style)]
], colWidths=[380, 168])
exp_header.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
]))
story.append(exp_header)

story.append(Paragraph('&bull; &nbsp;Architect scalable web applications using <b>Next.js, React.js, TypeScript</b>, and modern cloud technologies.', bullet_style))
story.append(Paragraph('&bull; &nbsp;Construct reusable, accessible, and responsive component libraries from Figma specs using <b>Tailwind CSS</b>, cutting UI delivery turnaround by 30%.', bullet_style))
story.append(Paragraph('&bull; &nbsp;Design and implement resilient <b>Next.js API Routes</b> and high-throughput RESTful microservices with JWT authorization and PostgreSQL data management.', bullet_style))
story.append(Paragraph('&bull; &nbsp;Spearhead frontend performance tuning and Core Web Vitals optimization, achieving <b>95+ Google Lighthouse scores</b> across production platforms.', bullet_style))
story.append(Spacer(1, 2))

# --- Featured Projects ---
story.append(Paragraph('FEATURED PROJECTS', section_heading_style))
story.append(HRFlowable(width='100%', thickness=0.4, color=colors.HexColor('#CBD5E1'), spaceBefore=0.5, spaceAfter=2))

# 1. QuickTool
p1_header = Table([
    [Paragraph('<b>QuickTool &mdash; All-in-One AI Productivity SaaS Platform</b>', project_title_style),
     Paragraph('<font color="#1D4ED8"><u>quicktool.space</u></font>', job_meta_style)]
], colWidths=[380, 168])
p1_header.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(p1_header)
story.append(Paragraph('<i>Tech: Next.js 15, TypeScript, Node.js, MongoDB, Google Gemini AI API, Tailwind CSS</i>', project_tech_style))
story.append(Paragraph('&bull; &nbsp;Built a flagship production AI SaaS platform featuring <b>100+ active AI tools</b> (writing, code optimizer, image processing, PDF utilities).', bullet_style))
story.append(Paragraph('&bull; &nbsp;Integrated <b>Google Gemini AI API</b> with real-time streaming tokens, intelligent rate-limiting, usage analytics, and graceful fallback handlers.', bullet_style))
story.append(Paragraph('&bull; &nbsp;Created a high-productivity side-by-side workspace with live Markdown rendering, instant multi-format export, and 98+ Core Web Vitals.', bullet_style))
story.append(Spacer(1, 1.5))

# 2. TodayAround
p2_header = Table([
    [Paragraph('<b>TodayAround &mdash; Real-Time Global Intelligence &amp; News Aggregator</b>', project_title_style),
     Paragraph('<font color="#1D4ED8"><u>todayaround.world</u></font>', job_meta_style)]
], colWidths=[380, 168])
p2_header.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(p2_header)
story.append(Paragraph('<i>Tech: Next.js, TypeScript, Rust (Actix-web), Tailwind CSS, Redis, REST APIs</i>', project_tech_style))
story.append(Paragraph('&bull; &nbsp;Engineered a high-frequency worldwide intelligence dashboard delivering live global news feeds, weather radar, sports, and financial market tickers.', bullet_style))
story.append(Paragraph('&bull; &nbsp;Developed concurrent scraping and normalization microservices in <b>Rust (Actix-web)</b>, achieving sub-50ms API delivery under high request volumes.', bullet_style))
story.append(Paragraph('&bull; &nbsp;Implemented client-side cache layers and background route prefetching in Next.js, eliminating screen flicker during channel switches.', bullet_style))
story.append(Spacer(1, 1.5))

# 3. TorvaDB
p3_header = Table([
    [Paragraph('<b>TorvaDB &mdash; High-Performance Self-Hosted Database Engine &amp; Studio</b>', project_title_style),
     Paragraph('<font color="#1D4ED8"><u>torvadb.vercel.app</u></font>', job_meta_style)]
], colWidths=[380, 168])
p3_header.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(p3_header)
story.append(Paragraph('<i>Tech: Rust, Next.js, TypeScript, SQL Engine, WebSockets, Tailwind CSS</i>', project_tech_style))
story.append(Paragraph('&bull; &nbsp;Authored an ACID-compliant database engine in <b>Rust</b> from scratch with Write-Ahead Logging (WAL) and custom B-Tree file storage structures.', bullet_style))
story.append(Paragraph('&bull; &nbsp;Developed a complete SQL lexer, AST parser, and query evaluator handling SELECT, INSERT, UPDATE, DELETE, and relational JOIN operations.', bullet_style))
story.append(Paragraph('&bull; &nbsp;Engineered a modern web studio in <b>Next.js &amp; TypeScript</b> for visual query benchmarking, real-time memory telemetry, and schema visualization via WebSockets.', bullet_style))
story.append(Spacer(1, 1.5))

# 4. Tansy Academy
p4_header = Table([
    [Paragraph('<b>Tansy Academy &mdash; Interactive SQL &amp; Database Training Platform</b>', project_title_style),
     Paragraph('<font color="#1D4ED8"><u>tansyacademy.com</u></font>', job_meta_style)]
], colWidths=[380, 168])
p4_header.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('TOPPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 0)]))
story.append(p4_header)
story.append(Paragraph('<i>Tech: Eleventy (11ty), Nunjucks, JavaScript, HTML5, CSS3, SQL</i>', project_tech_style))
story.append(Paragraph('&bull; &nbsp;Created an interactive online SQL training platform designed for non-IT professionals with interactive tutorials and sandbox schema playgrounds.', bullet_style))
story.append(Paragraph('&bull; &nbsp;Optimized static site generation (SSG) pipeline for blazing fast sub-second page loads, zero client JS bloat, and 100/100 Lighthouse performance.', bullet_style))
story.append(Spacer(1, 2))

# --- Education ---
story.append(Paragraph('EDUCATION', section_heading_style))
story.append(HRFlowable(width='100%', thickness=0.4, color=colors.HexColor('#CBD5E1'), spaceBefore=0.5, spaceAfter=2))
edu_table = Table([
    [Paragraph('<b>Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering</b>', job_title_style),
     Paragraph('Hyderabad, Telangana, India', job_meta_style)]
], colWidths=[380, 168])
edu_table.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 0),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0),
]))
story.append(edu_table)

doc.build(story)
print(f'PDF generated successfully at: {pdf_path}')

# Render to PNG image
doc_fitz = pymupdf.open(pdf_path)
total_pages = len(doc_fitz)
print(f'Total pages: {total_pages}')
for i, page in enumerate(doc_fitz):
    pix = page.get_pixmap(dpi=200)
    out_img = f'public/resume-page-{i+1}.png'
    pix.save(out_img)
    print(f'Page {i+1} saved to: {out_img}')
