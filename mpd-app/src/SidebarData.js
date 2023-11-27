import React from "react";
import * as RiIcons from "react-icons/ri";

 
export const SidebarData =[
    {
        title: "Get Started",
        path: "https://phenome.jax.org/about",
        type: "sidebar-text"
    },
    {
        title: "Explore",
        path: "/explore",
        arrowClosed: <RiIcons.RiArrowDownSLine style={{ stroke: "black", strokeWidth: "2"}}/>,
        arrowOpen: <RiIcons.RiArrowUpSLine style={{ stroke: "black", strokeWidth: "2"}}/>,
        type: "sidebar-text",
        subMenu:[
            {
                title: "Centers",
                path: "explore/centers",
                arrowClosed: <RiIcons.RiArrowRightSFill/>,
                arrowOpen: <RiIcons.RiArrowLeftSFill/>,
                type:"submenu-text",
                submenu: [
                    {
                        title: "Center for Genome Dynamics (CGD)",
                        path:"https://phenome.jax.org/centers/CGD",
                        type: "sidebar2-text"
                    },
                    {
                        title: "Center for Systems Neurogenetics of Addiction (CSNA)",
                        path:"https://phenome.jax.org/centers/CSNA",
                        type: "sidebar2-text"
                    },
                    {
                        title: "Eumorphia / Europhenome",
                        path:"https://phenome.jax.org/centers/EURO",
                        type:"sidebar2-text"
                    },
                    {
                        title: "German Mouse Clinic",
                        path:"https://phenome.jax.org/centers/GMC",
                        type: "sidebar2-text"
                    },
                    {
                        title: "Hybrid Mouse Diversity Panel Group",
                        path:"https://phenome.jax.org/centers/HMDP",
                        type: "sidebar2-text"
                    },
                    {
                        title: "Japan Mouse Phenotypes",
                        path:"https://phenome.jax.org/centers/JMP",
                        type: "sidebar2-text"
                    },
                    {
                        title: "JAX Heart, Lung, and Blood Center (HLB)",
                        path:"https://phenome.jax.org/centers/HLB",
                        type: "sidebar2-text"
                    },
                    {
                        title: "JAX In Vivo Services",
                        path:"https://phenome.jax.org/centers/JAXWEST",
                        type: "sidebar2-text"
                    },
                    {
                        title: "JAX KOMP Phenotyping Center",
                        path:"https://phenome.jax.org/centers/JaxKOMP",
                        type: "sidebar2-text"
                    },
                    {
                        title: "JAX Mice Clinical and Research Services (JMCRS)",
                        path:"https://phenome.jax.org/centers/JMCRS",
                        type: "sidebar2-text"
                    },
                    {
                        title: "AX Nathan Shock Aging Center",
                        path:"https://phenome.jax.org/centers/Shock",
                        type: "sidebar2-text"
                    },
                    {
                        title: "JAX Phenotyping Center",
                        path:"https://phenome.jax.org/centers/JLPC",
                        type: "sidebar2-text"
                    },
                    {
                        title: "JAX Special Mouse Strains Resource",
                        path:"https://phenome.jax.org/centers/SMSR",
                        type: "sidebar2-text"
                    },
                    {
                        title: "Monell Chemical Senses Center",
                        path:"https://phenome.jax.org/centers/Monell",
                        type: "sidebar2-text"
                    },
                    {
                        title: "National Institute on Aging Interventions Testing Program (ITP)",
                        path:"https://phenome.jax.org/projects/ITP1",
                        type: "sidebar2-text"
                    }

                ]
            },
            {
                title: "Investigators",
                path: "https://phenome.jax.org/about/investigators",
                type:"submenu-text"
            },
            {
                title: "Measures",
                path: "explore/measures",
                type:"submenu-text"
            },
            {
                title: "Ontologies",
                path: "https://phenome.jax.org/about/ontologies",
                type:"submenu-text"
            },
            {
                title: "Panels",
                path: "https://phenome.jax.org/panels",
                type:"submenu-text"
            },
            {
                title: "Procedures",
                path: "https://phenome.jax.org/procedures",
                type:"submenu-text"
            },
            {
                title: "Protocals",
                path: "https://phenome.jax.org/about/protocols",
                type:"submenu-text"
            },
            {
                title: "Publications",
                path: "explore/publications",
                type:"submenu-text"
            },
            {
                title: "QTL Archive",
                path: "https://phenome.jax.org/centers/QTLA",
                type:"submenu-text"
            },
            {
                title: "Studies",
                path: "explore/studies",
                type:"submenu-text",
                arrowClosed: <RiIcons.RiArrowRightSFill/>,
                arrowOpen: <RiIcons.RiArrowLeftSFill/>,
                submenu:[
                    {
                        title: "Drug, diet, pathogen, challenge studies",
                        path:"https://phenome.jax.org/interventions",
                        type: "sidebar2-text"
                    },
                    {
                        title: "Aging-related studies",
                        path:"https://phenome.jax.org/studies/aging",
                        type: "sidebar2-text"
                    },
                    {
                        title: "Molecular studies",
                        path:"https://phenome.jax.org/projlist/molecular",
                        type: "sidebar2-text"
                    },
                    {
                        title: "Multi-measure study designs",
                        path:"https://phenome.jax.org/studydesigns",
                        type: "sidebar2-text"
                    }

                ]
            },
            {
                title: "Strains",
                path: "https://phenome.jax.org/strains",
                type:"submenu-text"
            }
        ]
    },
    {
        title: "Analysis Tools",
        path: "/tools",
        arrowClosed: <RiIcons.RiArrowDownSLine style={{ stroke: "black", strokeWidth: "2"}} />,
        arrowOpen: <RiIcons.RiArrowUpSLine style={{ stroke: "black", strokeWidth: "2"}}/>,
        type: "sidebar-text",
        subMenu:[
            {
                title: "Compare Measures",
                path: "tools/compare-measures",
                type:"submenu-text"
            },
            {
                title: "Find Correlated Measures",
                path: "tools/correlated-measures",
                type:"submenu-text"
            },
            {
                title: "Find Multivariant Outliers",
                path: "tools/multivariant-outliers",
                type:"submenu-text"
            },
            {
                title: "Find Strains by Criteria",
                path: "tools/strains-by-criteria",
                type:"submenu-text"
            },
            {
                title: "MUster SNP Search",
                path: "tools/muster-snp",
                type:"submenu-text"
            },
            {
                title: "GxL Replicability",
                path: "tools/gxl-replicability",
                type:"submenu-text"
            },
            {
                title: "GWAS Meta-analysis",
                path: "tools/gwas-meta-analysis",
                type:"submenu-text"
            }
        ]
    },
    {
        title: "Contribute",
        path: "https://studyintake.jax.org/",
        type: "sidebar-text"
    },
    {
        title: "Download",
        path: "https://phenome.jax.org/downloads",
        type: "sidebar-text"
    },
]

