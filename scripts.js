document.getElementById('resume-builder-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const industry = document.getElementById('industry').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const linkedin = document.getElementById('linkedin').value;

    // Generate resume preview
    const resumePreview = `
        <h3>${fullName}</h3>
        <p>Email: ${email}</p>
        <p>Industry: ${industry}</p>
        <h4>Experience</h4>
        <p>${experience}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <p>LinkedIn: <a href="${linkedin}" target="_blank">${linkedin}</a></p>
    `;

    document.getElementById('preview-content').innerHTML = resumePreview;
});

document.getElementById('download-resume').addEventListener('click', function() {
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
