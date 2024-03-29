export default function ContactCard() {
    return (
        <>
            <section className="map" id="map">
                <div className="map_heading heading">Let's Talk Business!</div>
                <div className="map_para">
                    We’re open to discussing your ideas and look forward to
                    bringing them to life. Chat with us about software
                    outsourcing. We’ll be happy to answer any questions you
                    have. It’ll only take 15 minutes – and will be worth your
                    time.
                </div>

                <div className="leftportion_map">
                    <div className="left_head">Find our office in Paphos</div>
                    <div className="left_para">
                        +35796253566 or +35799169229
                        <div style={{ margin: "10px 0 10px 0" }}>
                            sp@vasilkoff.com or maxim@vasilkoff.com
                        </div>
                        Glastonos 12-14, 2nd Floor, Paphos 8010, Cyprus
                    </div>
                    <div className="gmap_container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.230872061629!2d32.419172014577214!3d34.77496278674638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14e706f487090f1d%3A0xfcc6a7e859d3f58e!2sGladstonos%2012-2nd%20Floor%2C%20Paphos%208046%2C%20Cyprus!5e0!3m2!1sen!2s!4v1666251894571!5m2!1sen!2s"
                            width="600"
                            height="450"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </>
    );
}
