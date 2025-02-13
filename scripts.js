document.getElementById('resume-builder-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const industry = document.getElementById('industry').value;
    const jobTitle = document.getElementById('job-title').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const linkedin = document.getElementById('linkedin').value;

    // Generate resume preview
    const resumePreview = `
        <h3>${fullName}</h3>
        <p><i class="fas fa-envelope"></i> ${email}</p>
        <p><i class="fas fa-phone"></i> ${phone}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${address}</p>
        <hr>
        <h4><i class="fas fa-briefcase"></i> ${jobTitle} (${industry})</h4>
        <h4><i class="fas fa-history"></i> Work Experience</h4>
        <p>${experience}</p>
        <h4><i class="fas fa-graduation-cap"></i> Education</h4>
        <p>${education}</p>
        <h4><i class="fas fa-tools"></i> Skills</h4>
        <p>${skills}</p>
        <h4><i class="fab fa-linkedin"></i> LinkedIn</h4>
        <p><a href="${linkedin}" target="_blank">${linkedin}</a></p>
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
