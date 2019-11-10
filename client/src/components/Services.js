import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer }
    from "react-icons/fa";
import Title from "./Title";
export default class extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free Cocktails",
                info:
                    "Bu ickiyi icmeseniz olmazmi yahoo arkadas onun yerine uzum suyunu icin yada portakal suyu icin? "
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info: "Loram ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                ifo:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?"
            }
        ]
    };
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="sevices-cener">
                    {this.state.services.map(item => {
                        return (
                            <article key={`item-${item.title}`} classNeme="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
        );
    }
}
