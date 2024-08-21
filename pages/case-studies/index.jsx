import Color from '../../components/utils/page.colors.util';

import colors from '../../content/contact/_colors.json';
import settings from '../../content/_settings.json';

import css from '../../styles/sections/contact/contact.module.scss';

export default function ContactMe() {
    return (
        <>
            <Color colors={colors} />
            <section className={css.contactSection}>
                <div className={css.container}>
                    <h2 className={css.title}>Get in Touch</h2>
                    <p className={css.description}>
                        I’d love to hear from you! Whether you’re interested in working together, have a question, or just want to say hello, feel free to drop me a message.
                    </p>
                    <form className={css.contactForm}>
                        <div className={css.formGroup}>
                            <label htmlFor="name" className={css.label}>Name</label>
                            <input type="text" id="name" className={css.input} placeholder="Your Name" required />
                        </div>
                        <div className={css.formGroup}>
                            <label htmlFor="email" className={css.label}>Email</label>
                            <input type="email" id="email" className={css.input} placeholder="Your Email" required />
                        </div>
                        <div className={css.formGroup}>
                            <label htmlFor="message" className={css.label}>Message</label>
                            <textarea id="message" className={css.textarea} placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className={css.submitButton}>Send Message</button>
                    </form>
                </div>
            </section>
        </>
    );
}
