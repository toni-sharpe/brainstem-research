import React from 'react'

import './OwidAtomicChart.scss'

function OwidAtomicChart({
    children,
    figureAlign,
    figureAlt,
    figureSrc,
    fullWidth,
    heading,
    text,
}) {
    const figure = children
        ? children
        : (
            <img
                alt={figureAlt}
                className='owid-atomic-chart__figure'
                src={figureSrc}
            />
        )

    return (
        <article className='owid-atomic-chart column-layout space-children--wide-column'>
            <h2 className='owid-atomic-chart__heading'>{heading}</h2>
            <div className='owid-atomic-chart__details space-children--wide-column'>
                { figureAlign === 'left' && figure }
                <section
                  className='owid-atomic-chart__text column-layout space-children--column'
                >
                    {text}
                </section>
                { figureAlign === 'right' && figure }
            </div>
        </article>
    )
}

OwidAtomicChart.defaultProps = {
    figureAlign: 'right',
    fullWidth: false,
}

export default OwidAtomicChart
