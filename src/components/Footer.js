import '../styles/components/footer.scss';
import YoutubeIcon from '../assets/icons/youtube.png';
import GithubIcon from '../assets/icons/github.png';
import TwitterIcon from '../assets/icons/twitter.png';
import storeLogo from '../assets/images/apikachuStoreLogo.png';
import usLogo from '../assets/icons/BitHugLogo.png';

function Footer() {
  return html`
    <footer class='footer'>
        <a href='#home' class="footer__logo">
            <img src="${storeLogo}" alt="Apikachu Store"/>
        </a>
        <ul class='footer__sections'>
            <li><a href="#Home">Home</a></li>
            <li><a href="#TermsAndConditions">Terms & Conditions</a></li>
            <li><a href="#Store">Store</a></li>
        </ul>
        <div class="footer__us">
            <p>Designed And Coded By:</p>
            <div class="footer__us-logo">
                <img src=${usLogo} alt="BitHug" />
            </div>
        </div>
        <div class="footer__social">
            <a href='#' class='footer__social-circle'><img src=${YoutubeIcon} alt=""/></a>
            <a href='#' class='footer__social-circle'><img src=${GithubIcon} alt=""/></a>
            <a href='#' class='footer__social-circle'><img src=${TwitterIcon} alt=""/></a>
        </div>
        <hr class='footer__line'/>
    </foooter>
    `;
}

export default Footer;
