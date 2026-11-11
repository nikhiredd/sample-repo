
pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"
        CI = "true"
    }

    options {
        timestamps()
        timeout(time: 30, unit: 'MINUTES')
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out code from GitHub'
                checkout scm
            }
        }

        stage('Check Node and NPM') {
            steps {
                sh '''
                    echo "Node version:"
                    node --version

                    echo "NPM version:"
                    npm --version

                    echo "Node location:"
                    which node

                    echo "NPM location:"
                    which npm
                '''
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browser') {
            steps {
                sh 'npx playwright install chromium'
            }
        }

        stage('Generate BDD Tests') {
            steps {
                sh 'npx bddgen'
            }
        }

        stage('Run Playwright BDD Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts(
                artifacts: 'playwright-report/**,test-results/**',
                allowEmptyArchive: true
            )

            echo 'Pipeline execution completed'
        }

        success {
            echo 'Playwright BDD tests passed!'
        }

        failure {
            echo 'Playwright BDD tests failed! Check Console Output.'
        }
    }
}

