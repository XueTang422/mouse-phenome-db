import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData =[
    {
        title: "Get Started",
        path: "/getstarted"
    },
    {
        title: "Explore",
        path: "/explore",
        arrowClosed: <RiIcons.RiArrowDownSLine/>,
        arrowOpen: <RiIcons.RiArrowUpSLine/>,
        subMenu:[
            {
                title: "Centers",
                path: "explore/centers",
                arrowClosed: <RiIcons.RiArrowRightSFill/>,
                arrowOpen: <RiIcons.RiArrowLeftSFill/>,
                extension: [
                    {
                        title: "Center for Genome Dynamics (CGD)",
                        path:"explore/centers/CGD"
                    },
                    {
                        title: "Center for Systems Neurogenetics of Addiction (CSNA)",
                        path:"explore/centers/CSNA"
                    },
                    {
                        title: "Eumorphia / Europhenome",
                        path:"explore/centers/EURO"
                    },
                    {
                        title: "German Mouse Clinic",
                        path:"explore/centers/GMC"
                    },
                    {
                        title: "Hybrid Mouse Diversity Panel Group",
                        path:"explore/centers/HMDP"
                    },
                    {
                        title: "Japan Mouse Phenotypes",
                        path:"explore/centers/JMP"
                    }

                ]
            },
            {
                title: "Investigators",
                path: "explore/investigators"
            },
            {
                title: "Measures",
                path: "explore/measures"
            },
            {
                title: "Ontologies",
                path: "explore/ontologies"
            },
            {
                title: "Panels",
                path: "explore/panels"
            },
            {
                title: "Procedures",
                path: "explore/procedures"
            },
            {
                title: "Protocals",
                path: "explore/protocals"
            },
            {
                title: "Publications",
                path: "explore/publications"
            },
            {
                title: "QTL Archive",
                path: "explore/qtlarchive"
            },
            {
                title: "Studies",
                path: "explore/studies"
            },
            {
                title: "Strains",
                path: "explore/strains"
            }
        ]
    },
    {
        title: "Analysis Tools",
        path: "/tools",
        arrowClosed: <RiIcons.RiArrowDownSLine/>,
        arrowOpen: <RiIcons.RiArrowUpSLine/>,
        subMenu:[
            {
                title: "Compare Measures",
                path: "tools/compare-measures"
            },
            {
                title: "Find Correlated Measures",
                path: "tools/correlated-measures"
            },
            {
                title: "Find Multivariant Outliers",
                path: "tools/multivariant-outliers"
            },
            {
                title: "Find Strains by Criteria",
                path: "tools/strains-by-criteria"
            },
            {
                title: "MUster SNP Search",
                path: "tools/muster-snp"
            },
            {
                title: "GxL Replicability",
                path: "tools/gxl-replicability"
            },
            {
                title: "GWAS Meta-analysis",
                path: "tools/gwas-meta-analysis"
            }
        ]
    },
    {
        title: "Contribute",
        path: "/contribute"
    },
    {
        title: "Download",
        path: "/download"
    },
]
