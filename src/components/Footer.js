import '../styles/components/footer.scss';
import YoutubeIcon from '../assets/icons/youtube.png';
import GithubIcon from '../assets/icons/github.png';
import LinkedinIcon from '../assets/icons/linkedin.png';
import storeLogo from '../assets/images/apikachuStoreLogo.png';
import usLogo from '../assets/icons/BitHugLogo.png';

function Footer() {
  return html`
    <footer class="footer">
      <a href="/" class="footer__logo" data-link>
        <img src="${storeLogo}" alt="Apikachu Store" width="180px" height="57px"/>
      </a>
      <ul class="footer__sections">
        <li><a href="#" >Home</a></li>
        <li><a href="#TermsAndConditions">Terms & Conditions</a></li>
        <li><a href="#Store">Store</a></li>
      </ul>
      <div class="footer__us">
        <p>Designed And Coded By:</p>
        <a class="footer__us-logo" href="https://bit-hug.com">
          <img src="${usLogo}" alt="BitHug" width="55px" height="56px"/>
        </a>
      </div>
      <div class="footer__social">
        <a href="https://www.youtube.com/channel/UCi3caZVvP0OLlHtBrl7ursA" class="footer__social-circle"
          ><img src="${YoutubeIcon}" alt=""
        /></a>
        <a href="https://github.com/bit-hug-learning" class="footer__social-circle"
          ><img src="${GithubIcon}" alt=""
        /></a>
        <a href="https://www.linkedin.com/company/bit-hug/" class="footer__social-circle"
          ><img src="${LinkedinIcon}" alt=""
        /></a>
      </div>
      <hr class="footer__line" />
    </footer>
  `;
}

export default Footer;
