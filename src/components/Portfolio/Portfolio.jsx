import React from 'react';
import styles from './Portfolio.module.css';
import classNames from 'classnames';

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <h3 className={styles.portfolio__heading}>Портфолио</h3>
      <ul className={styles.portfolio__list}>
        <li className={styles.portfolio__listItem}>
          <a
            href={'https://vitland.github.io/how-to-learn/'}
            target={'_blank'}
            className={classNames(styles.portfolio_link, 'opacity_link')}
          >
            Статичный сайт<span>↗</span>
          </a>
        </li>
        <li className={styles.portfolio__listItem}>
          <a
            href={'https://vitland.github.io/russian-travel/'}
            target={'_blank'}
            className={classNames(styles.portfolio_link, 'opacity_link')}
          >
            Адаптивный сайт<span>↗</span>
          </a>
        </li>
        <li className={styles.portfolio__listItem}>
          <a
            href={'https://vmesto.nomoredomains.work/'}
            target={'_blank'}
            className={classNames(styles.portfolio_link, 'opacity_link')}
          >
            Одностраничное приложение<span>↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
