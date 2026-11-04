# Bru's website

A one-page Jekyll site. An "At a glance" summary sits at the top, followed by a full record in expandable sections (research, publications, data & code, fieldwork, outreach, CV, notes) and contact.

The summary fills itself from the data files: current projects (`status: now`), the latest position, degrees, publications marked `featured: true`, the first two awards, and all datasets and software.
GitHub Pages builds it automatically, so there's nothing to install to publish it.

## Publish it (about 5 minutes)

1. On GitHub, create a new public repo named **`bru-melo.github.io`**.
2. Upload the contents of this folder (or `git init`, commit, and push).
3. In the repo, go to **Settings → Pages**, set *Source* to "Deploy from a branch", pick `main` and `/ (root)`.
4. After a minute the site is live at <https://bru-melo.github.io>.

If you use a different repo name (e.g. `website`), set `baseurl: "/website"` in `_config.yml`.
For your own domain, add it under Settings → Pages → Custom domain.

## Where to edit things

| What | File |
|---|---|
| Name, tagline, email, photo, CV link | `_config.yml` |
| Research cards | `_data/research.yml` |
| Publications (incl. "in prep") | `_data/publications.yml` |
| Datasets | `_data/datasets.yml` |
| Code / packages | `_data/software.yml` |
| Fieldwork | `_data/fieldwork.yml` |
| Outreach & science communication | `_data/outreach.yml` |
| Work, education, awards, service, skills | `_data/cv.yml` |
| Profile links (ORCID, GitHub…) | `_data/links.yml` |
| Blog posts | `_posts/YYYY-MM-DD-title.md` |
| Colours & fonts | top of `assets/css/site.css` |

Adding a paper, dataset or package is one new entry in the matching YAML file: copy an existing
entry and change the fields. Your name is bolded automatically in author lists.

**Photo:** add a square image at `assets/img/photo.jpg` and uncomment `photo:` in `_config.yml`.
**CV PDF:** add it at `assets/cv/cv.pdf` and uncomment `cv_pdf:`. This adds a button in the hero and CV section.
**Blog:** delete the sample post if you don't want a Notes section yet. The section hides itself when `_posts/` is empty.

## Preview locally (optional)

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```
