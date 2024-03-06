import { Avatar } from "@/components/done/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/not-done/card"
import { Label } from "@/components/not-done/label"
import { Button } from "@/components/reviewing/button"
import { Input } from "@/components/reviewing/input"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center dark:bg-gray-900">
      <main className="flex-1 p-6 md:p-12">
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <Avatar />
              <CardTitle>Layouts</CardTitle>
              <CardDescription>
                A collection of layouts. These are useful for structuring your
                page.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Sidebar Layout</CardTitle>
                    <CardDescription>
                      A layout with a sidebar and main content area.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid h-20 w-full rounded-md bg-gray-100" />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Grid Layout</CardTitle>
                    <CardDescription>
                      A layout with a grid of components.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 w-full rounded-md bg-gray-100" />
                      <div className="h-20 w-full rounded-md bg-gray-100" />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Form Layout</CardTitle>
                    <CardDescription>A layout for forms.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          placeholder="Enter your email"
                          type="email"
                        />
                      </div>
                      <Button>Submit</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
