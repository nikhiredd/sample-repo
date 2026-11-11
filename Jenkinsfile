
pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install chromium'
            }
        }

        stage('Generate BDD Tests') {
            steps {
                sh 'npx bddgen'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
        stage('Check Jenkins Environment') {
    steps {
        sh '''
            echo "PATH=$PATH"
            which node || true
            which npm || true
            node --version || true
            npm --version || true
        '''
    }
}
    }

    post {
        always {
            echo 'Pipeline execution completed'
        }

        success {
            echo 'BDD tests passed!'
        }

        failure {
            echo 'BDD tests failed!'
        }
    }
}
