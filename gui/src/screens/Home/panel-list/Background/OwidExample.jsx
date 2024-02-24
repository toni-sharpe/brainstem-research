import React from 'react'

import './OwidExample.scss'

function OwidExample() {
    return (
        <article className='owid-example column-layout space-children--column--very-wide'>
            <header className='owid-example__text column-layout space-children--column--wide'>
                <h1>Estimation of the number of paralytic polio cases by region</h1>
                <h2>
                    Only a fraction of all polio cases are reported. Here we apply a method by Tebbens et al. (2010) to estimate the actual number of global polio cases.
                </h2>
            </header>

            <section className='owid-example__text column-layout space-children--column--wide'>
                <div>
                    By: Saloni Dattani and Fiona Spooner
                    April 20, 2022
                </div>
                <div>
                    Cite this article
                    Reuse our work freely
                </div>
            </section>

            <section className='owid-example__text column-layout space-children--column--wide'>
                <p>
                    This article was first published in April 2018. It was last updated in May 2022.
                </p>
                <p>
                    In this post we explain how we estimate the number of cases of paralytic polio by country and region. To summarize, we apply a method by Tebbens et al. (2010) to the reported cases, using two measures of testing quality.
                </p>
                <p>
                    The number of reported cases of paralytic polio can be an underestimate of the number of actual cases for several reasons. People with acute flaccid paralysis (AFP) may not be seen by doctors or healthcare workers and reported as suspected cases of polio. They may not have samples taken, or taken in time, to detect the presence of poliovirus. Or their samples may not be tested for poliovirus and reported.
                </p>
            </section>


            <section className='owid-example__text column-layout space-children--column--wide'>
                <h2>Adapted methodology from Tebbens et al. (2010)</h2>
                <div className='column-layout space-children--column'>
                    <p>
                        In their paper, Tebbens et al. (2010) introduced a method to adjust for under-detection.1
                    </p>
                    <p>
                        Their method uses two indicators: non-polio AFP rate and AFP cases with adequate stool collection.
                    </p>
                    <p>
                        The non-polio AFP rate is the rate at which cases of AFP from non-polio causes are detected and reported. This indicates whether AFP is being detected and reported sufficiently.
                    </p>
                    <p>
                        The metric called 'AFP cases with adequate stool collection' is the share of suspected cases that have testable stool samples taken from them. To test for the poliovirus, two samples need to be taken between 24–48 hours apart, within 14 days of the onset of paralysis.2
                    </p>
                    <p>
                        Tebbens et al. used these two indicators to derive a 'correction factor'. Then, the number of reported cases was multiplied by this correction factor to estimate the number of actual cases.
                    </p>
                    <p>
                        In their paper, they estimated cases from 1980 to 2009 for countries that received GPEI support. However, here we adapt this method by applying it to all countries that reported data to the WHO from 1980 to 2020.
                    </p>
                    <p>
                        Up to 1995: Surveillance data from the WHO was not available, so they applied a correction factor of 7 for all countries that received GPEI support to account for under-detection.
                    </p>
                    <p>
                        Between 1996 and 2000: Polio surveillance was rapidly expanding, and surveillance data was provided to researchers by the WHO. This means Tebbens et al. (2010) applied a correction factor for the countries that received GPEI support based on the surveillance data to account for under-detection. They applied a correction factor of 7 when a country reported a non-polio AFP rate &lt;1 or an adequate stool collection &lt;60%. They applied a correction factor of 2 when a country reported a non-polio AFP rate &lt;2 or an adequate stool collection &lt;80%. Otherwise, they applied a correction factor of 1.11.
                    </p>
                    <p>
                        Since this data is not publicly available, we apply a correction factor of 1.11 to all countries during this time period to match their average correction factor. However, as noted above, we apply this to all countries, including those that did not receive GPEI support.
                    </p>
                    <p>
                        Post-2000: After this, they applied a correction factor of 7 when a country reported a non-polio AFP rate &lt;1 or an adequate stool collection &lt;60%. They applied a correction factor of 2 when a country reported a non-polio AFP rate &lt;2 or an adequate stool collection &lt;80%. Otherwise, they applied a correction factor of 1.11.
                    </p>
                    <p>
                        They also made two exceptions in footnote (a) of Table 1, justifying their use of a correction factor of 1.11 for China from 1989–1992 and Oman in 1988 because they had large active investigations into outbreaks.
                    </p>
                </div>
            </section>

            <article className='owid-example__map column-layout space-children--column--wide'>
                <h2>Results: comparison of reported cases vs. estimated cases</h2>
                <div className='owid-example__map-block'>
                    <section className='owid-example__sub-block column-layout space-children--column'>
                        <p>
                            In this chart you can compare the estimated number of polio cases with the number of reported cases.
                        </p>
                        <p>
                            It is important to note that these are rough estimates of the number of paralytic polio cases based on metrics of testing quality (non-polio AFP rate and AFP cases with adequate stool collection). Data on testing quality by country is not available before 2000.
                        </p>
                    </section>
                    <figure className='owid-example__sub-block '>
                        <img src='repvsest.png' alt='reported vs estimated' />
                    </figure>
                </div>
            </article>

            <article className='owid-example__map column-layout space-children--column--wide'>
                <h2>Results: estimated cases by region</h2>
                <div className='owid-example__map-block'>
                    <section className='owid-example__sub-block column-layout space-children--column'>
                        <p>
                            This chart shows the results of this method by region. Using the adapted methodology based on Tebbens et al. (2010), there were around 370,000 paralytic polio cases worldwide in 1980. Since then, the number of cases has declined in all regions. Today, the world is very close to the goal of eradicating this disease globally.
                        </p>
                    </section>
                    <figure className='owid-example__sub-block'>
                        <img src='cases.png' alt='cases' />
                    </figure>
                </div>
            </article>

            <article className='owid-example__map column-layout space-children--column--wide'>
                <h2>Results: estimated cases by region</h2>
                <div className='owid-example__map-block'>
                    <figure className='owid-example__sub-block'>
                        <img src='cases.png' alt='cases' />
                    </figure>
                    <section className='owid-example__sub-block column-layout space-children--column'>
                        <p>
                            This chart shows the results of this method by region. Using the adapted methodology based on Tebbens et al. (2010), there were around 370,000 paralytic polio cases worldwide in 1980. Since then, the number of cases has declined in all regions. Today, the world is very close to the goal of eradicating this disease globally.
                        </p>
                    </section>
                </div>
            </article>

            <article className='owid-example__map column-layout space-children--column--wide'>
                <h2>It is important to note that these are rough estimates of the number of paralytic polio cases based on metrics of testing quality (non-polio AFP rate and AFP cases with adequate stool collection). Data on testing quality by country is not available before 2000.</h2>
                <div className='owid-example__map-block'>
                    <figure className='owid-example__sub-block'>
                        <img src='cases.png' alt='cases' />
                    </figure>
                    <section className='owid-example__sub-block column-layout space-children--column'>
                        <p>
                            This chart shows the results of this method by region. Using the adapted methodology based on Tebbens et al. (2010), there were around 370,000 paralytic polio cases worldwide in 1980. Since then, the number of cases has declined in all regions. Today, the world is very close to the goal of eradicating this disease globally.
                        </p>
                    </section>
                </div>
            </article>

            <article className='owid-example__map column-layout space-children--column--wide'>
                <h2>It is important to note that these are rough estimates of the number of paralytic polio cases based on metrics of testing quality (non-polio AFP rate and AFP cases with adequate stool collection). Data on testing quality by country is not available before 2000.</h2>
                <div className='owid-example__map-block'>
                    <section className='owid-example__sub-block column-layout space-children--column'>
                        <p>
                            This chart shows the results of this method by region. Using the adapted methodology based on Tebbens et al. (2010), there were around 370,000 paralytic polio cases worldwide in 1980. Since then, the number of cases has declined in all regions. Today, the world is very close to the goal of eradicating this disease globally.
                        </p>
                    </section>
                    <figure className='owid-example__sub-block'>
                        <img src='cases.png' alt='cases' />
                    </figure>
                </div>
            </article>

            <article className='owid-example__map column-layout space-children--column--wide'>
                <h2 className='full-width'>It is important to note that these are rough estimates of the number of paralytic polio cases based on metrics of testing quality (non-polio AFP rate and AFP cases with adequate stool collection). Data on testing quality by country is not available before 2000.</h2>
                <div className='owid-example__map-block'>
                    <section className='owid-example__sub-block column-layout space-children--column'>
                        <p>
                            This chart shows the results of this method by region. Using the adapted methodology based on Tebbens et al. (2010), there were around 370,000 paralytic polio cases worldwide in 1980. Since then, the number of cases has declined in all regions. Today, the world is very close to the goal of eradicating this disease globally.
                        </p>
                    </section>
                    <figure className='owid-example__sub-block'>
                        <img src='cases.png' alt='cases' />
                    </figure>
                </div>
            </article>

            <footer className='owid-example__text column-layout space-children--column--wide'>
                <h2>Endnotes</h2>
                <div className='column-layout space-children--column'>
                    <p>

                        Duintjer Tebbens, R. J., Pallansch, M. A., Cochi, S. L., Wassilak, S. G. F., Linkins, J., Sutter, R. W., Aylward, R. B., & Thompson, K. M. (2010). Economic analysis of the global polio eradication initiative. Vaccine, 29(2), 334–343. https://doi.org/10.1016/j.vaccine.2010.10.026
                    </p>
                    <p>

                        Their stool samples should then be processed in a GPEI-accredited laboratory for the presence of the poliovirus. If they test positive, they are considered a 'confirmed case' of polio. WHO-recommended surveillance standard of poliomyelitis. (n.d.). World Health Organization. https://web.archive.org/web/20210423203212/https://www.who.int/immunization/monitoring_surveillance/burden/vpd/surveillance_type/active/poliomyelitis_standards/en/
                    </p>
                </div>
            </footer>
        </article>
    )
}

export default OwidExample



