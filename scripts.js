// Helper function to create a new input field
const createInputField = (type, className, placeholder, required = true) => {
    const input = document.createElement('input');
    input.type = type;
    input.className = className;
    input.placeholder = placeholder;
    input.required = required;
    return input;
};

// Helper function to create a new textarea field
const createTextareaField = (className, placeholder, required = true) => {
    const textarea = document.createElement('textarea');
    textarea.className = className;
    textarea.placeholder = placeholder;
    textarea.required = required;
    return textarea;
};

// Add Work Experience Field
document.getElementById('add-experience').addEventListener('click', () => {
    const experienceFields = document.getElementById('work-experience-fields');
    const newExperience = document.createElement('div');
    newExperience.classList.add('experience-entry');
    newExperience.innerHTML = `
        ${createInputField('text', 'company-name', 'Company Name').outerHTML}
        ${createInputField('text', 'job-title', 'Job Title').outerHTML}
        ${createInputField('text', 'duration', 'Duration (e.g., Jan 2020 - Present)').outerHTML}
        ${createTextareaField('description', 'Description of your role and achievements...').outerHTML}
    `;
    experienceFields.appendChild(newExperience);
});

// Add Education Field
document.getElementById('add-education').addEventListener('click', () => {
    const educationFields = document.getElementById('education-fields');
    const newEducation = document.createElement('div');
    newEducation.classList.add('education-entry');
    newEducation.innerHTML = `
        ${createInputField('text', 'institution', 'Institution Name').outerHTML}
        ${createInputField('text', 'degree', 'Degree (e.g., Bachelor of Science)').outerHTML}
        ${createInputField('text', 'duration', 'Duration (e.g., 2016 - 2020)').outerHTML}
        ${createTextareaField('description', 'Description of your education...').outerHTML}
    `;
    educationFields.appendChild(newEducation);
});

// Add Skill Field
document.getElementById('add-skill').addEventListener('click', () => {
    const skillsFields = document.getElementById('skills-fields');
    const newSkill = document.createElement('div');
    newSkill.classList.add('skill-entry');
    newSkill.innerHTML = `
        ${createInputField('text', 'skill-name', 'Skill Name (e.g., JavaScript)').outerHTML}
        ${createInputField('text', 'proficiency', 'Proficiency (e.g., Advanced)').outerHTML}
    `;
    skillsFields.appendChild(newSkill);
});

// Generate Resume Preview
document.getElementById('resume-builder-form').addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const profilePicture = document.getElementById('profile-picture').files[0];
    const industry = document.getElementById('industry').value;
    const jobTitle = document.getElementById('job-title').value;
    const linkedin = document.getElementById('linkedin').value;

    // Work Experience
    let experienceHTML = '';
    document.querySelectorAll('.experience-entry').forEach(entry => {
        experienceHTML += `
            <div class="experience-item">
                <h4>${entry.querySelector('.company-name').value}</h4>
                <p><strong>${entry.querySelector('.job-title').value}</strong> | ${entry.querySelector('.duration').value}</p>
                <p>${entry.querySelector('.description').value}</p>
            </div>
        `;
    });

    // Education
    let educationHTML = '';
    document.querySelectorAll('.education-entry').forEach(entry => {
        educationHTML += `
            <div class="education-item">
                <h4>${entry.querySelector('.institution').value}</h4>
                <p><strong>${entry.querySelector('.degree').value}</strong> | ${entry.querySelector('.duration').value}</p>
                <p>${entry.querySelector('.description').value}</p>
            </div>
        `;
    });

    // Skills
    let skillsHTML = '';
    document.querySelectorAll('.skill-entry').forEach(entry => {
        skillsHTML += `
            <p><strong>${entry.querySelector('.skill-name').value}</strong>: ${entry.querySelector('.proficiency').value}</p>
        `;
    });

    // Generate resume preview
    const resumePreview = `
        <div class="resume-header">
            <h3>${fullName}</h3>
            <p><i class="fas fa-envelope"></i> ${email}</p>
            <p><i class="fas fa-phone"></i> ${phone}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${address}</p>
            ${profilePicture ? `<img src="${URL.createObjectURL(profilePicture)}" alt="Profile Picture" class="profile-picture">` : ''}
        </div>
        <hr>
        <div class="resume-section">
            <h4><i class="fas fa-briefcase"></i> ${jobTitle} (${industry})</h4>
        </div>
        <div class="resume-section">
            <h4><i class="fas fa-history"></i> Work Experience</h4>
            ${experienceHTML}
        </div>
        <div class="resume-section">
            <h4><i class="fas fa-graduation-cap"></i> Education</h4>
            ${educationHTML}
        </div>
        <div class="resume-section">
            <h4><i class="fas fa-tools"></i> Skills</h4>
            ${skillsHTML}
        </div>
        <div class="resume-section">
            <h4><i class="fab fa-linkedin"></i> LinkedIn</h4>
            <p><a href="${linkedin}" target="_blank">${linkedin}</a></p>
        </div>
    `;

    // Display resume preview
    const previewContent = document.getElementById('preview-content');
    previewContent.innerHTML = resumePreview;
    previewContent.classList.remove('placeholder-text');
});

// Download Resume
document.getElementById('download-resume').addEventListener('click', () => {
    const resumeContent = document.getElementById('preview-content').innerHTML;
    const blob = new Blob([resumeContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
