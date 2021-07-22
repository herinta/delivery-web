import { from } from 'array-flatten'
import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>Milk</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href='/'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/'>
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href='/'>
                                <FaFacebook/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
