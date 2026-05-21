import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Building } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-800/50">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center md:space-y-12">
          <h2 className="text-4xl lg:text-6xl font-bold font-jakarta mb-6">
            Trusted by{' '}
            <span className="text-white">
              Educational Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hear from the institutions that have transformed their operations with DOCME's 
            comprehensive digital ecosystem.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
          {/* Main Featured Testimonial */}
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2 glass-dark border-white/10">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Building className="w-8 h-8 text-violet-400" />
                <div>
                  <h3 className="text-lg font-bold text-white font-jakarta">Al Noor International School</h3>
                  <p className="text-sm text-gray-400">Dubai, UAE</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium text-gray-200 leading-relaxed">
                  DOCME has revolutionized how we manage our institution. The AI-powered analytics have given us insights we never had before, and the seamless integration across all modules has improved our operational efficiency by 40%.
                </p>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                      alt="Dr. Sarah Ahmed"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-bold">SA</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium text-white font-jakarta">Dr. Sarah Ahmed</cite>
                    <span className="text-gray-400 block text-sm">Principal</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Second Testimonial */}
          <Card className="md:col-span-2 glass-dark border-white/10">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium text-gray-200 leading-relaxed">
                  The technical excellence and scalability of DOCME is impressive. We migrated from three different systems to one unified platform.
                </p>
                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                      alt="Rajesh Kumar"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white font-bold">RK</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium text-white font-jakarta">Rajesh Kumar</cite>
                    <span className="text-gray-400 block text-sm">IT Director, Delhi Public School</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Third Testimonial */}
          <Card className="glass-dark border-white/10">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-gray-200">
                  The user experience is exceptional. Teachers love the intuitive interface and parents appreciate the real-time updates.
                </p>
                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
                      alt="Fatima Al Zahra"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-violet-500 to-purple-500 text-white font-bold">FZ</AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="text-sm font-medium text-white font-jakarta">Fatima Al Zahra</cite>
                    <span className="text-gray-400 block text-sm">Academic Coordinator</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Fourth Testimonial */}
          <Card className="glass-dark border-white/10">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-gray-200">
                  The financial management module has streamlined our fee collection and budget planning significantly.
                </p>
                <div className="grid grid-cols-[auto_1fr] gap-3">
                  <Avatar className="size-12">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                      alt="Mohammed Hassan"
                      height="400"
                      width="400"
                      loading="lazy"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-orange-500 to-red-500 text-white font-bold">MH</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-white font-jakarta">Mohammed Hassan</p>
                    <span className="text-gray-400 block text-sm">Finance Manager</span>
                  </div>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}