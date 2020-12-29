import React from 'react';
import { 
    FaFacebook, 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter, 
    FaYoutube 
} from 'react-icons/fa';
import { 
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink,

} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to ="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener norefrrer">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener norefrrer">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener norefrrer">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener norefrrer">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin" rel="noopener norefrrer">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
