pipeline {
    agent any

    tools {
        nodejs 'Node18'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: ''
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
        success {
            echo '✅ Playwright Tests Passed!'
        }
        failure {
            echo '❌ Playwright Tests Failed!'
        }
    }
}