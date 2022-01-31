import styled from "styled-components";

export const MarkdownContainer = styled.div`
  img {
    max-width: 100%;
  }

  table {
    width: 100%;
  }

  table,
  th,
  td {
    padding: 5px;
  }

  body {
    font: 1.3em "Vollkorn", Palatino, Times;
    color: #333;
    line-height: 1.4;
    text-align: justify;
  }
  header,
  nav,
  article,
  footer {
    width: 700px;
    margin: 0 auto;
  }
  article {
    margin-top: 4em;
    margin-bottom: 4em;
    min-height: 400px;
  }
  footer {
    margin-bottom: 50px;
  }
  video {
    margin: 2em 0;
    border: 1px solid #ddd;
  }

  nav {
    font-size: 0.9em;
    font-style: italic;
    border-bottom: 1px solid #ddd;
    padding: 1em 0;
  }
  nav p {
    margin: 0;
  }

  /* Typography
-------------------------------------------------------- */

  h1 {
    margin-top: 0;
    font-weight: normal;
  }
  h2 {
    font-weight: normal;
  }
  h3 {
    font-weight: normal;
    font-style: italic;
    margin-top: 3em;
  }
  p {
    margin-top: 0;
    -webkit-hypens: auto;
    -moz-hypens: auto;
    hyphens: auto;
  }
  ul {
    list-style: square;
    padding-left: 1.2em;
  }
  ol {
    padding-left: 1.2em;
  }
  li {
    margin-block-end: 4px;
    p {
      margin-block-end: 4px;
    }
  }
  blockquote {
    margin-left: 1em;
    padding-left: 1em;
    border-left: 3px solid ${(props) => props.theme.colors.primaryBrand};
  }
  code {
    font-family: "Consolas", "Menlo", "Monaco", monospace, serif;
    font-size: 0.9em;
  }
  pre {
    background: ${(props) => props.theme.colors.backgroundInverted};
    color: ${(props) => props.theme.colors.secondaryTextInverted};
    border-radius: var(--radius);
    padding: 20px;
    overflow: scroll;
  }
  a img {
    border: none;
  }
  h1 a,
  h1 a:hover {
    color: #333;
    text-decoration: none;
  }
  hr {
    color: ${(props) => props.theme.colors.primaryBrand};
    height: 1px;
    margin: 2em 0;
    border-top: solid 1px ${(props) => props.theme.colors.primaryBrand};
    border-bottom: none;
    border-left: 0;
    border-right: 0;
  }
  p#heart {
    font-size: 2em;
    line-height: 1;
    text-align: center;
    color: #ccc;
  }
  .red {
    color: #b50000;
  }

  // Caption
  img + em {
    display: block;
    font-size: 0.8em;
    color: ${(props) => props.theme.colors.secondaryText};
  }

  /* Home Page
--------------------------- */

  body#index li {
    margin-bottom: 1em;
  }

  /* iPad
-------------------------------------------------------- */
  @media only screen and (max-device-width: 1024px) {
    body {
      font-size: 120%;
      line-height: 1.4;
    }
  } /* @iPad */

  /* iPhone
-------------------------------------------------------- */
  @media only screen and (max-device-width: 480px) {
    body {
      text-align: left;
    }
    article,
    footer {
      width: auto;
    }
    article {
      padding: 0 10px;
    }
  } /* @iPhone */
`;