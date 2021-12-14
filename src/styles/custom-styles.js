import { css } from 'lit-element';

/*
This file is reserved for any custom css that developers want to add to
customize their theme. Simply add your css to this file and yarn build.
*/

export default css`

.toolbar-btn{
    border-radius: 20px;
}
.m-btn{
    border-radius: 20px;
}

.nav.nav-bar.read{ /* Left bar */
    padding: 0px;
}

.nav-bar-section{ /* Operations  */
    justify-content: left;
    text-transform: lowercase;
    display: block;
    font-size: 16px;

    padding-top: 16px;
    padding-left: 50px;
    padding-bottom: 16px;
    padding-right: 10px;
}

.nav-bar-section:first-letter {
    text-transform: uppercase;
}
.nav-bar-info{ /* Overview and autentication */
    padding-top: 16px;
    padding-left: 45px;
    padding-bottom: 16px;
    padding-right: 10px;
}

.nav-bar-tag{ /* bar endpoints */
    color: #FFFFFF;
    font-weight: lighter;

    padding-top: 10px;
    padding-left: 58px;
    padding-bottom: 10px;
    padding-right: 10px;
}

.nav-bar-path { /* bar path */
    display: none;
}


`;
