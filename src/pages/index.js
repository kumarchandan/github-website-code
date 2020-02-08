import React from "react"
import 'antd/dist/antd.css'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { GitHub, Linkedin, Hash, Mail } from "react-feather";
import { Timeline, Tag } from "antd";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h1>Hey! I'm <b>Chandan Kumar</b>.</h1>
        <h1>I'm a <b>Full Stack</b></h1>
        <h1>Web Developer from India</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: "70px" }}>
          <a href="https://github.com/kumarchandan" target="_blank" rel="noopener noreferrer">
            <GitHub size={20} color="grey" fill="grey" />
          </a>
          <a href="https://www.linkedin.com/in/chandan-kumar-b6b55757/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} color="grey" fill="grey" />
          </a>
          <a href="mailto:chandankumar99341@gmail.com?Subject=Hey%20Chandan" target="_top">
            <Mail size={20} color="grey" />
          </a>
        </div>
        <div style={{ marginTop: '50px', }}>
          <h3>Skills</h3>
          <div>
            <Tag color="#2db7f5">Javascript</Tag>
            <Tag color="#2db7f5">HTML</Tag>
            <Tag color="#2db7f5">React</Tag>
            <Tag color="#2db7f5">Angular</Tag>
            <Tag color="#2db7f5">Python</Tag>
            <Tag color="#2db7f5">NodeJS</Tag>
            <Tag color="#2db7f5">ABAP</Tag>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', height: `400px`, width: `300px`, marginBottom: `1.45rem` }}>
        <Image />
        <div style={{ textAlign: 'center'}}>
          <h3><Hash size={25} color="grey" />A nerd crashed into a viking</h3>
        </div>
      </div>
    </div>
    <div>
      <h3>Life and Projects</h3>
      <Timeline>
        <Timeline.Item>
          <h5>2015 - Present | Full Stack Developer</h5>
          <h5>Business ByDesign Suite</h5>
          <a href="https://www.sap.com/india/products/business-bydesign.html" target="_blank" rel="noopener noreferrer">Website</a>
          <p>Responsible for designing and developing new features for the Customer specific
              requirements. Extensively with OOP Methodism as well as UI components development
              with SAP UI5.</p>
          <h5>Big Data Margin Assurance</h5>
          <p>Applied feature extraction, did Preprocessing and feature engineering on the given
              dataset to get helpful insights.</p>
          <h5>Studpi</h5><a href="https://studpi.com/" target="_blank" rel="noopener noreferrer">Website</a>
          <p>An Education platform for Computer Science students (class 10th to 12th) of Computer Science. It has
            300+ registered users.</p>
          <h5>Institute of AI</h5><a href="https://instituteofai.com/" target="_blank" rel="noopener noreferrer">Website</a>
          <p>High quality and affordable training for everyone in the field of Artificial Intelligence</p>
        </Timeline.Item>
        <Timeline.Item>
          <h5>2012 - 2014 | Developer | Scholar BITS Pilani</h5>
          <p>Got myself my first job at SAP :)</p>
          <p>Worked on SAP Fiori Apps</p>
          <p>Built a Talent Assessment Platform</p>
          <p>Started my Masters (Software Engineerning) with BITS Pilani</p>
        </Timeline.Item>
        <Timeline.Item>
          <h5>2009 - 2012 | St. Xavier's College</h5>
          <p>Got my Bachelor's degree</p>
        </Timeline.Item>
        <Timeline.Item>
          <h5>2007 | School</h5>
          <p>Finished my board exams</p>
          <p>Got myself a girlfriend :P</p>
        </Timeline.Item>
        <Timeline.Item>
          <h5>1992</h5>
          <p>I was born.</p>
        </Timeline.Item>
      </Timeline>
    </div>
  </Layout>
)

export default IndexPage
