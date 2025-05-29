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

// const icons = {
//   email: `${process.env.BASE_URL}/cv-icons/email.png`,
//   phone: `${process.env.BASE_URL}/cv-icons/phone.png`,
//   linkedIn: `${process.env.BASE_URL}/cv-icons/linkedin.png`,
// }

// const avatar = `${process.env.BASE_URL}/avatar.png`;

const icons = {
  email: `public/cv-icons/email.png`,
  phone: `public/cv-icons/phone.png`,
  linkedIn: `public/cv-icons/linkedin.png`,
}

const avatar = `public/avatar.png`;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 30,
    fontSize: 10,
    fontFamily: 'Helvetica'
  },
  sidebar: {
    width: '30%',
    paddingRight: 10,
    borderRight: '1px solid #ccc',
  },
  main: {
    width: '70%',
    paddingLeft: 10,
  },
  section: {
    marginBottom: 10
  },
  heading: {
    fontSize: 24,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#000'
  },
  jobTitle: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#2563EB'
  },
  blueText: {
    color: '#2563EB'
  },
  subheading: {
    fontSize: 11,
    fontWeight: 'bold',
    marginBottom: 2
  },
  text: {
    marginBottom: 2
  },
  photo: {
    width: 80,
    borderRadius: 5
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
    marginTop: 0,
    marginBottom: 3
  },
  contactElement: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4
  },
  skills: {
    marginBottom: 2,
    marginRight: 6,
    textDecoration: 'underline'
  },
  sectionTitle: {
    fontSize: 12,
    marginBottom: 6,
    fontWeight: 'bold',
    color: '#333',
  },
});

export const CVDocument = ({ data }: { data: CVJsonData }): ReactElement<DocumentProps> => {
  return (
    <>
      <Page size="A4" style={styles.page}>







        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 10 }}>
            <Text style={styles.heading}>{data.name}</Text>
            <Text style={styles.jobTitle}>{data.mainTitle}</Text>
            <View style={styles.contactElement}>
              <Image src={icons.email} style={{ width: 10, height: 10, marginRight: 3 }} />
              <Text>{data.email}</Text>
            </View>
            <View style={styles.contactElement}>
              <Image src={icons.phone} style={{ width: 10, height: 10, marginRight: 3 }} />
              <Text>{data.phone}</Text>
            </View>
            <View style={styles.contactElement}>
              <Link src={data.linkedIn} style={{textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Image src={icons.linkedIn} style={{ width: 10, height: 10, marginRight: 3 }} />
                <Text>LinkedIn</Text>
              </Link>
            </View>
          </View>
          <Image
            style={styles.photo}
            src={avatar}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>SUMMARY</Text>
          <View style={styles.line} />
          <Text style={styles.text}>{data.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>EDUCATION</Text>
          <View style={styles.line} />
          <Text>{data.education}</Text>
          <Text style={styles.blueText}>{data.educationPlace}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>SKILLS</Text>
          <View style={styles.line} />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: 4 }}>
            {data.skills.map((skill, index) => (
              <Text key={index} style={styles.skills}>{skill}</Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>LANGUAGES</Text>
          <View style={styles.line} />
          {data.languages.map((language, index) => (
            <Text key={index} style={styles.text}>{language}</Text>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.subheading}>CERTIFICATIONS</Text>
          <View style={styles.line} />
          {data.certificates.map((certificate) => (
            <Link key={certificate.id} src={certificate.link} style={{textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontWeight: 'bold'}}>{certificate.name}</Text>
            </Link>
          ))}
        </View>
      
        <View style={styles.section}>
          <Text style={styles.subheading}>EXPERIENCE</Text>
          <View style={styles.line} />
          {data.experience.map(company => 
             (<View key={company.id} style={{ marginBottom: 6 }}>
                <Text style={[{ fontWeight: 'bold' }, styles.blueText]}>{company.companyName}</Text>
                <Text>{company.startDate} – {company.endDate}</Text>
                <Text>Position: {company.position}</Text>
                {/* <Text>Projects:</Text> */}
                {company.projects.map(project => {
                  
                  return project ? (
                    <View key={project.id} style={{ marginLeft: 10, marginBottom: 4, }}>
                      
                        <Text style={{ fontWeight: 'bold' }}>{project.projectName}: </Text>
                        {project.highlights.length > 0 &&
                          project.highlights.map((highlight, index) => (
                            <Text key={index} style={{ marginLeft: 10 }}>-{highlight}</Text>
                          ))}
                      
                      
                    </View>
                  ) : null;
                })}
              </View>
            ))}
        </View>
      </Page>
    </>
  );
};
