"use client"

import { styled } from "styled-components"
import { Saira_Stencil_One } from 'next/font/google'
import { PrimaryInputWSearchIcon } from "./primary-input"
import { CartControl } from "./cart-control"
import { useFilter } from "../hooks/useFilter"

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
    gap: 12px;

    @media (min-width: ${props => props.theme.desktopBreakpoint}){
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 20px 160px;
        gap: 24px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    text-decoration: none;

    @media(min-width: ${props => props.theme.tableBreakpoint}){
        font-size: 24px;
    }

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 40px;
    }
`

const HeaderTopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (min-width: ${props => props.theme.desktopBreakpoint}){
        width: auto;
    }
`

const SearchAndCartContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    @media (min-width: ${props => props.theme.desktopBreakpoint}){
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 24px;
        width: auto;
    }
`

export function Header(props : HeaderProps){
    const {setSearch, search} = useFilter();

    return(
        <TagHeader>
            <HeaderTopContainer>
                <Logo className={sairaStencil.className} href="/">Capputeeno</Logo>
                <div className="mobile-only-cart">
                    <CartControl/>
                </div>
            </HeaderTopContainer>
            <SearchAndCartContainer>
                <PrimaryInputWSearchIcon
                    value={search}
                    handleChange={setSearch}
                    placeholder="Procurando por algo específico?"
                />
                <div className="desktop-only-cart">
                    <CartControl/>
                </div>
            </SearchAndCartContainer>
        </TagHeader>
    )
}