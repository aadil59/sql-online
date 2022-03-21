import { createGlobalStyle } from "styled-components";
import reset from "./reset";
import cssVar from "./variables";

const GlobalStyle = createGlobalStyle`
	${reset};
	*, *::before, *::after {
		box-sizing: border-box;
	}
	/* ANIMATION */
:root {
  --animate-duration: .5s;
  --animate-delay: .5s;
  --animate-repeat: 1
}

.animate__fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animate__fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animate__fadeInBottom {
  -webkit-animation-name: fadeInBottom;
  animation-name: fadeInBottom;
  -webkit-animation-duration: .5s;
  animation-duration: .5s;
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0)
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0)
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
}
@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0)
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0)
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
}
@keyframes fadeInBottom {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0)
  }

  to {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0)
  }
}
	html {
		box-sizing: border-box;
    font-size: 62.5% !important;
    -webkit-text-size-adjust: none;
    position: relative;
    min-height: 100%;
		scroll-behavior: smooth;
		background-color: ${cssVar.color1};
	}
	body {
		line-height: 1.3;
    color: ${cssVar.colorTypePrimary};
    text-rendering: optimizeLegibility;
    letter-spacing: .01em;
		font-family: ${cssVar.fontFamily};
		font-weight: ${cssVar.fontRegular};
		font-size: ${cssVar.fontS};
		scroll-behavior: smooth;
		margin: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	code {
		font-family: ${cssVar.fontFamilySecondary};
	}
	.row {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.col {
		flex-basis: 100%;
	}

@media screen and (min-width: 800px) {
  .col {
    flex: 1;
		&._9 {
			flex: 9;
		}
		&._8 {
			flex: 8;
		}
		&._4 {
			flex: 4;
		}
		&._3 {
			flex: 3;
		}
  }
}
  `;

export default GlobalStyle;
