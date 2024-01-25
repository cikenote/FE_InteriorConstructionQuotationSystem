import "../../styles/components/pricing.scss";
const Pricing = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    const pricing = [
        {
            rate: '120',
            des: 'Interior represents the way to feel happy and complete.',
            li1: 'General living space advices',
            li2: 'Interior design advices',
            li3: 'Complete home redesign',
            li4: 'Modern interior planning',
            li5: 'Kitchen design',
            title: 'Nhà phố',
            // link: '/pricing',
        },
        {
            rate: '210',
            des: 'Interior represents the way to feel happy and complete.',
            li1: '24/7 Support available',
            li2: 'Home Consulting System',
            li3: '30-Day analytics & insights',
            li4: 'Ultimate Features',
            li5: 'Kitchen design',
            title: 'Nhà chung cư',
            // link: '/pricing',
        },
        {
            rate: '373',
            des: 'Interior represents the way to feel happy and complete.',
            li1: '24/7 Support available',
            li2: 'Home Consulting System',
            li3: '30-Day analytics & insights',
            li4: 'Ultimate Features',
            li5: 'Kitchen design',
            title: 'Nhà biệt thự',
            // link: '/pricing',
        },


    ]


    return (
        <section className={`wpo-pricing-section section-padding`}>
        <div className="container">
        <div className="row">
            <div className="wpo-section-title-s2">
                <span>Pricing Plan</span>
                <h2>Choose Your Optimal Plan</h2>
                <div className="invisible-text">
                    <h2>Pricing Plan</h2>
                </div>
            </div>
        </div>
            <div className="wpo-pricing-wrap">
                <div className="row">
                    {pricing.map((pricing, ptem) => (
                        <div className="col col-lg-4 col-md-6 col-12" key={ptem}>
                            <div className="wpo-pricing-item">
                                <div className="wpo-pricing-top">
                                    <div className="pricing-thumb">
                                        <span>{pricing.title}</span>
                                    </div>
                                    <div className="wpo-pricing-text">
                                        <h2>${pricing.rate}<span>/per m²</span></h2>
                                        <p>{pricing.des}</p>
                                    </div>
                                </div>
                                <div className="wpo-pricing-bottom">
                                    <div className="wpo-pricing-bottom-text">
                                        <ul>
                                            <li>{pricing.li1}</li>
                                            <li>{pricing.li2}</li>
                                            <li>{pricing.li3}</li>
                                            <li>{pricing.li4}</li>
                                            <li>{pricing.li5}</li>
                                        </ul>
                                        <a onClick={ClickHandler} href={pricing.link}>Choose Plan</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="invisible-title1">
            <h2>Pricing</h2>
        </div>
    </section>
    )
}

export default Pricing