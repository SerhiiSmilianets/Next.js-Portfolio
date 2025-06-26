// src/components/cv/CVDocument.tsx
import React, { ReactElement } from 'react';
import {
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  DocumentProps,
  Image,
  Link
} from '@react-pdf/renderer';

import { CVJsonData } from '@/types';

Font.register({
  family: 'Roboto',
  src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Me5Q.ttf'
});

const icons = {
  email: `public/cv-icons/email.png`,
  phone: `public/cv-icons/phone.png`,
  linkedIn: `public/cv-icons/linkedin.png`,
  portfolio: `public/cv-icons/portfolio.png`,
  calendar: `public/cv-icons/calendar.png`
}

const avatar = `public/avatar.png`;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontSize: 10,
    fontFamily: 'Helvetica',
    color: '#333',
  },
  sidebar: {
    width: '30%',
    paddingTop: 20,
    paddingRight: 10,
    paddingLeft: 20,
    paddingBottom: 20,
    borderRight: '1px solid #ccc',
    backgroundColor: '#f9f9f9'
  },
  main: {
    width: '70%',
    paddingTop: 20,
    paddingRight: 20,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 10
  },
  companyTitle: {
    marginTop: 2,
    color: '#2563EB',
    fontWeight: 'bold'
  },
  companyDate: {
    fontStyle: 'italic',
    marginVertical: 1,
    fontSize: 9
  },
  companyPosition: {
    marginVertical: 1,
    fontSize: 9
  },
  companyPositionTitle: {
    marginVertical: 1,
    fontSize: 9,
    fontWeight: 'bold'
  },
  projectContainer: {
    marginLeft: 10, 
    marginBottom: 4,
    marginTop: 2
  },
  projectTitle: {
    fontWeight: 'bold',
    marginBottom: 2
  },
  projectHighlight: {
    marginLeft: 10
  },
  text: {
    marginBottom: 1
  },
  photo: {
    width: 100,
    borderRadius: 5
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginTop: 0,
    marginBottom: 3
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2563EB',
    textAlign: 'center'

  },
  contactElement: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
    fontSize: 10,
    fontWeight: 700
  },
  contactIcon: {
    width: 10, 
    height: 10, 
    marginRight: 3
  },
  skills: {
    marginBottom: 2,
    marginRight: 6,
  },
  sectionTitle: {
    fontSize: 12,
    marginBottom: 2,
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export const CVDocument = ({ data }: { data: CVJsonData }): ReactElement<DocumentProps> => {
  return (
    <>
      <Page size="A4" style={styles.page}>
        <View style={styles.sidebar}>
          {/* Image and name section */}
          <View style={styles.section}>
            <View style={{ alignItems: 'center', marginBottom: 10 }}>
              <Image
                style={styles.photo}
                src={avatar}
              />
            </View>
            <Text style={styles.contactName}>{data.name}</Text>
          </View>

          {/* Contact section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CONTACT</Text>
            <View style={styles.line} />
            <View style={styles.contactElement}>
              <Image src={icons.email} style={styles.contactIcon} />
              <Text>{data.email}</Text>
            </View>
            <View style={styles.contactElement}>
              <Image src={icons.phone} style={styles.contactIcon} />
              <Text>{data.phone}</Text>
            </View>
            <View style={styles.contactElement}>
              <Link src={data.linkedIn} style={styles.link}>
                <Image src={icons.linkedIn} style={styles.contactIcon} />
                <Text>LinkedIn</Text>
              </Link>
            </View>
            <View style={styles.contactElement}>
              <Link src={data.portfolioLink} style={styles.link}>
                <Image src={icons.calendar} style={styles.contactIcon} />
                <Text>Portfolio</Text>
              </Link>
            </View>
          </View>

          {/* Skills section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SKILLS</Text>
            <View style={styles.line} />
            <View style={{ flexDirection: 'column', flexWrap: 'wrap', marginBottom: 4 }}>
              {data.skills.map((skill, index) => (
                <Text key={index} style={styles.skills}>{skill}</Text>
              ))}
            </View>
          </View>

          {/* Certifications section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>CERTIFICATIONS</Text>
            <View style={styles.line} />
            {data.certificates.map((certificate) => (
              <Link key={certificate.id} src={certificate.link} style={styles.link}>
                <Text>{certificate.name}</Text>
              </Link>
            ))}
          </View>

          {/* Languages section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>LANGUAGES</Text>
            <View style={styles.line} />
            {data.languages.map((language, index) => (
              <Text key={index} style={styles.text}>{language}</Text>
            ))}
          </View>

          {/* Education section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EDUCATION</Text>
            <View style={styles.line} />
            <Text>{data.education}</Text>
          </View>
        </View>

        <View style={styles.main}>
          {/* Summary section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>SUMMARY</Text>
            <View style={styles.line} />
            <Text style={styles.text}>{data.summary}</Text>
          </View>

          {/* Experience section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>EXPERIENCE</Text>
            <View style={styles.line} />
              {data.experience.map(company => (
                <View key={company.id} style={{ marginBottom: 6 }}>
                    <Text style={styles.companyTitle}>{company.companyName}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginVertical: 2}}>
                        <Image src={icons.calendar} style={{width: 9, height: 9, marginRight: 2}} />
                        <Text style={styles.companyDate}>{company.startDate} – {company.endDate}</Text>
                    </View>
                    <Text>
                      <Text style={styles.companyPositionTitle}>Position: </Text>
                      <Text style={styles.companyPosition}>{company.position}</Text>
                    </Text>

                    {company.projects.map(project => {
                      return project ? (
                        <View key={project.id} style={styles.projectContainer}>
                          <Text style={styles.projectTitle}>{project.projectName}: </Text>
                          {project.highlights.length > 0 &&
                            project.highlights.map((highlight, index) => (
                              <Text key={index} style={styles.projectHighlight}>-{highlight}</Text>
                          ))}
                        </View>
                      ) : null;
                    })}
                </View>
              ))}
            </View>
          </View>
      </Page>
    </>
  );
};
