import styled from "styled-components";

export const App = styled.div`

    --header-height: 18.5rem;
    --midbanner-height: 3.25rem;
    --footer-height: 2.875rem;
    margin: 0;
    display: grid;
    grid-template-rows: var(--header-height) var(--midbanner-height) 1fr var(--footer-height);
    grid-template-areas: "header" "midbanner" "content" "footer";
    height: 100vh;
    background-color: #F4f4f4;
    
    header.header {
        grid-area: header;
    }

    section.midbanner {
        grid-area: midbanner;
    }
    
    main.content {
        grid-area: content;
    }
    
    footer.footer {
        grid-area: footer;
    }
`