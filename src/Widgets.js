import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className='widgets'>
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            {newsArticle('Valorant update coming soon', 'Top news - 9912 readers')}
            {newsArticle('SPPU Term-end postponed for TEs', 'Top news - 4010 readers')}
            {newsArticle('Diwali to be celebrated in AIT', 'Top news - 3010 readers')}
            {newsArticle('Sapna rejects internship scam', 'Top news - 1991 readers')}
            {newsArticle('Narendra Modi posts on LinkedIn', 'Top news - 913 readers')}
            {newsArticle('Abhay to be declared dead', 'Top news - 234 readers')}
        </div>
        
    )
}

export default Widgets