import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faJsSquare, faPython, faPhp, faGit } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faTools, faLaptopCode, faUserCog } from '@fortawesome/free-solid-svg-icons';

import Color from '../../components/utils/page.colors.util';
import settings from '../../content/_settings.json';
import colors from '../../content/articles/_colors.json';

import css from '../../styles/sections/skills/skills.module.scss';

export default function Skills() {
    const skills = {
        Languages: [
            { name: "Java", icon: faJava },
            { name: "JavaScript", icon: faJsSquare },
            { name: "SQL", icon: faDatabase },
            { name: "Python", icon: faPython },
            { name: "PHP", icon: faPhp }
        ],
        Tools: [
            { name: "VS Code", icon: faTools },
            { name: "Eclipse", icon: faLaptopCode },
            { name: "Android Studio", icon: faLaptopCode }
        ],
        Database: [
            { name: "MySql", icon: faDatabase },
            { name: "MS SQL Server", icon: faDatabase },
            { name: "Oracle", icon: faDatabase },
            { name: "PostgreSQL", icon: faDatabase },
            { name: "MongoDB", icon: faDatabase }
        ],
        "Testing and Debugging": [
            { name: "JUnit Testing", icon: faTools }
        ],
        Frameworks: [
            { name: "React Js", icon: faLaptopCode },
            { name: "Node Js", icon: faLaptopCode },
            { name: "Angular", icon: faLaptopCode }
        ],
        "Soft Skills": [
            { name: "Communication Skills", icon: faUserCog },
            { name: "Responsive to environment change", icon: faUserCog },
            { name: "Team Player", icon: faUserCog }
        ],
        "Other Skills": [
            { name: "JPA", icon: faLaptopCode },
            { name: "Git", icon: faGit }
        ],
    };

    return (
        <>
            <Color colors={colors} />
            <section className={css.section}>
                <div className={css.container}>
                    {Object.entries(skills).map(([category, items], index) => (
                        <div className={css.skillCategory} key={index}>
                            <h3 className={css.categoryTitle}>{category}</h3>
                            <ul className={css.skillList}>
                                {items.map((skill, i) => (
                                    <li key={i} className={css.skillItem}>
                                        <FontAwesomeIcon icon={skill.icon} className={css.skillIcon} />
                                        {skill.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
